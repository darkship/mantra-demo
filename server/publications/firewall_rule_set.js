import {FirewallRuleSet} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default () => {
  Meteor.publish('firewall_rule_sets', () => {
    return FirewallRuleSet.find({});
  });
};
