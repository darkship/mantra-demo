import FirewallRuleSet from './firewall_rule_set';
import FirewallRule from './firewall_rule';
import ips from './ips';

export default function () {
  FirewallRuleSet();
  FirewallRule();
  ips();
}
