import {FirewallRule, FirewallRuleSet} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default () => {
  Meteor.publish('firewall_rules', function(firewallRuleSetId) {
    check(firewallRuleSetId, String);
    return [
      FirewallRuleSet.find(firewallRuleSetId),
      FirewallRule.find({firewall_rule_set_id: firewallRuleSetId}),
    ];
  });
};
