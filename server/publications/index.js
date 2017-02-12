import firewallRuleSet from './firewall_rule_set';
import firewallRule from './firewall_rule';
import ips from './ips';
import sites from './sites';
import videos from './videos';
import crawlerQueue from './crawler_queue';

export default () => {
  firewallRuleSet();
  firewallRule();
  ips();
  sites();
  videos();
  crawlerQueue();
};
