import {FirewallRuleSet} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('firewall_rule_sets', function () {
    return FirewallRuleSet.find({});
  });

}
