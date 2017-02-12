import {CrawlerQueue} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default () => {
  Meteor.publish('crawlqueue', function(siteId) {
    check(siteId, String);
    let self = this;
    CrawlerQueue.find({_id: siteId}).observe({
      added: (doc) => {
        self.added('crawlqueue', doc._id, doc);
      },
      changed: (newDoc) => {
        self.changed('crawlqueue', newDoc._id, newDoc);
      },
    });
    this.ready();
  });
};
