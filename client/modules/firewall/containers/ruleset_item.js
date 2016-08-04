import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import RulesetItem from '../components/ruleset_item.jsx';

export const composer = ({context}, onData) => {
  const {FlowRouter} = context();
  onData(null, {activeRuleSet:FlowRouter.getParam('ruleset')});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  goToRuleSet:actions.ruleset.goToRuleSet
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RulesetItem);
