import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import RuleItem from '../components/rule_item.jsx';

export const composerTracker = ({context,_id}, onData) => {
  const {Collections} = context();
  onData(null, {
  	rule:Collections.FirewallRule.findOne(_id)
  });
};




export const depsMapper = (context, actions) => ({
  context: () => context,
  delete:actions.rule.delete,
  move:actions.rule.move,
  showEditor:actions.rule.showEditor,
  hideEditor:actions.rule.hideEditor,
  updateRule:actions.rule.updateRule,
  setTitle:actions.rule.updateTitle,
  setInboundHost:actions.rule.updateInboundHost,
  setInboundPort:actions.rule.updateInboundPort,
  setOutboundHost:actions.rule.updateOutboundHost,
  setOutBoundPort:actions.rule.setOutBoundPort,
  setAction:actions.rule.updateAction,
});

export default composeAll(
  composeWithTracker(composerTracker),
  useDeps(depsMapper)
)(RuleItem);
