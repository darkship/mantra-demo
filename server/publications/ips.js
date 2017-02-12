import {Ip} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default () => {
  Meteor.publish('ips', () => {
    return Ip.find();
  });
};
