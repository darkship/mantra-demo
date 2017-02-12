import {Sites} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default () => {
  Meteor.publish('sites', function() {
    return Sites.find();
  });
  Meteor.publish('site', function(id) {
    check(id, String);
    return Sites.find({_id: id});
  });
};
