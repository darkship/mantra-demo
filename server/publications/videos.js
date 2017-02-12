import {Videos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Counts} from 'meteor/tmeasday:publish-counts';

export default () => {
  Meteor.publish('videos', function(videosId) {
    check(videosId, String);
    return Videos.find(videosId);
  });

  Meteor.publish('total_videos', function(siteId) {
    check(siteId, String);
    Counts.publish(this, 'total_videos_' + siteId,
      Videos.find({site_id: siteId}));
  });
};
