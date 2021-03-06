import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Ruleset from '../components/ruleset.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const firewallRuleSetId = FlowRouter.getParam('ruleset');
  if (firewallRuleSetId) {
    if (Meteor.subscribe('firewall_rules', firewallRuleSetId).ready()) {
      onData(null, {
        ruleSet: Collections.FirewallRuleSet.findOne(firewallRuleSetId),
        currentRule: FlowRouter.getQueryParam('rule'),
      });
    } else {
      onData(null, null);
    }
  } else {
    onData(null, {});
  }
};
export const composerStore = ({context, _id}, onData) => {
  const {Store} = context();

  const unsub = Store.subscribe(() => {
    onData(null, {editor: Store.getState().RuleReducer.RuleUpdaterReducer});
  });
  onData(null, {});
  const cleanup = () => {
    unsub();
  };
  return cleanup;
};
export const depsMapper = (context, actions) => ({
  context: () => context,
  updateTitle: actions.ruleset.updateTitle,
  deleteRuleSet: actions.ruleset.delete,
});

export default composeAll(
  composeWithTracker(composer),
  compose(composerStore),
  useDeps(depsMapper)
)(Ruleset);
