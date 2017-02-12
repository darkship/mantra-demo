import {Videos, Sites, CrawlerQueue} from '/lib/collections';

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

// import url from 'url';
import {_} from 'lodash';
import Crawler from '/lib/utils/crawler';

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/53.0.2785.148 Safari/537.36 Vivaldi/1.4.589.41';

export default () => {
  Meteor.methods({
    'crawl.crawl'(siteId) {
      check(siteId, String);
      const userId = this.userId;

      const site = Sites.findOne(siteId);

      if (!site) {
        throw new Meteor.Error(404, 'Site not found');
      }
      if (site.isCrawling) {
        throw new Meteor.Error(401, 'Already crawling');
      }
      const c = new Crawler({userAgent});

      c.on('queueItemSize.change',
        Meteor.bindEnvironment((queueItemSize, inc) => {
          CrawlerQueue.upsert({_id: siteId, user_id: userId},
            {$inc: {queueItemSize: inc}}, (e) => {
              if (e) {
                console.error(e);
              }
            }
          );
        })
      );
      const videoPageCB = Meteor.bindEnvironment((pageUrl, error, result, $) => {
        if (error) {
          console.error(error);
          return;
        }
        if (!$) {
          console.error('no $ for ' + pageUrl);
          return;
        }
        const title = $('title').html();
        const url = $('video').children().attr('src');
        const tags = $(site.tagSelector).map((i, s) => $(s).html()).get();
        const actors = $(site.actorSelector).map((i, s) => $(s).html()).get();
        console.log('found title', title);
        console.log('url', url);
        let v = new Videos({pageUrl, title, url, tags, actors,
          site_id: siteId});
        v.save((err) => {
          if (err && err.error == 409) {
        // console.error('duplicate')
          } else if (err) {
            console.log('error on save video');
            console.error(err);
          }
        });
      });
      const pageCB = (page, error, result, $) => {
        if (error) {
          console.error(error);
        }
        if (!$) {
          console.error('no $ for ', page);
          return;
        }

        const urls = $('a').map((i, a) => {
          const toQueueUrl = $(a).attr('href');
          if (toQueueUrl && toQueueUrl.match(site.videoUrlRegex)) {
            return toQueueUrl;
          }
        });
        $(_.uniq(urls)).each((index, u) => {
          c.queue({
            uri: u,
            callback(error, result, $) {
              videoPageCB(u, error, result, $);
            },
          });
        });
      };
      for (let i = site.minPage; i <= site.maxPage; i++) {
        const uri = site.pageUrl.replace('{$}', i);
        console.log(uri);

        c.queue([{
          uri,
          callback: (error, result, $) => {
            pageCB(uri, error, result, $);
          },
        }]);
      }
    },
    'crawl.stop': (siteId) => {
      check(siteId, String);
    },
  });
};
