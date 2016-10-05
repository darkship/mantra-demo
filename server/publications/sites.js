import {Sites} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('sites', function () {
    return Sites.find();
  });
  Meteor.publish('site', function (_id) {
    return Sites.find({_id});
  });
}
