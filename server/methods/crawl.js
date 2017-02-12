import {Videos, Sites} from '/lib/collections';
import {Mongo} from 'meteor/mongo';

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Crawler from 'crawler';
// import url from 'url';
import {_} from 'lodash';

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/53.0.2785.148 Safari/537.36 Vivaldi/1.4.589.41';
/**
 * customCrawler
 */
class CustomCrawler extends Crawler {
  /**
   * constructor
   */
  constructor(...args) {
    super(args);
  }

  /**
   * _pushToQueue
   */
  _pushToQueue(...args) {
    this.emit('queueItemSize.change', this.queueItemSize, +1);
    super.apply(this, args);
  }

  /**
   *_release
   */
  _release(...args) {
    this.emit('queueItemSize.change', this.queueItemSize, -1);
    super._release.apply(this, args);
  }
}


const Queues = new Mongo.Collection(null);

Meteor.publish('crawlqueue', function(siteId) {
  check(siteId, String);
  let self = this;
  Queues.find({_id: siteId}).observe({
    added: (doc) => {
      self.added('crawlqueue', doc._id, doc);
    },
    changed: (newDoc) => {
      self.changed('crawlqueue', newDoc._id, newDoc);
    },
  });
  this.ready();
});

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
      const c = new CustomCrawler({userAgent});

      c.on('queueItemSize.change',
        Meteor.bindEnvironment((queueItemSize, inc) => {
          Queues.upsert({_id: siteId, user_id: userId},
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
        let v = new Videos({pageUrl, title, url, tags, actors, siteId});
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
