import {Videos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('videos', function (videosId) {
    return Videos.find(videosId);
  });

  Meteor.publish('total_videos',function(site_id){
  	Counts.publish(this, 'total_videos_'+site_id, Videos.find({site_id}));
  })

}
