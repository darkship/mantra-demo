import FirewallRuleSet from './firewall_rule_set';
import FirewallRule from './firewall_rule';
import ips from './ips';
import sites from './sites';
import videos from './videos';

export default function () {
  FirewallRuleSet();
  FirewallRule();
  ips();
  sites();
  videos();
}
