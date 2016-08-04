import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import RulesetList from '../components/ruleset_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('firewall_rule_sets').ready())
  {
  	onData(null, {ruleSets:Collections.FirewallRuleSet.find({},{sort:{title:1}}).fetch()});
  }
};


export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RulesetList);
