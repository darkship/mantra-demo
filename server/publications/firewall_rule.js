import {FirewallRule,FirewallRuleSet} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('firewall_rules', function (firewall_rule_set_id) {
    return [FirewallRuleSet.find(firewall_rule_set_id),FirewallRule.find({firewall_rule_set_id})];
  });
}
