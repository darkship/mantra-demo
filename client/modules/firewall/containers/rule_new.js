import {useDeps, composeAll, compose} from 'mantra-core';

import RuleNew from '../components/rule_new.jsx';

export const composer = ({context}, onData) => {
  const {Store} = context();

  const unsubscribe = Store.subscribe(() => {
    onData(null, Store.getState().RuleReducer.RuleCreatorReducer);
  });
  onData(null, Store.getState().RuleReducer.RuleCreatorReducer);
  const cleanup = () => {
    unsubscribe();
  };
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  showCreator: actions.rule.showCreator,
  hideCreator: actions.rule.hideCreator,
  setTitle: actions.rule.setTitle,
  setInboundHost: actions.rule.setInboundHost,
  setInboundPort: actions.rule.setInboundPort,
  setOutboundHost: actions.rule.setOutboundHost,
  setOutBoundPort: actions.rule.setOutBoundPort,
  setAction: actions.rule.setAction,
  create: actions.rule.create,
  createTest: actions.rule.createTest,
  showEditor: actions.rule.showEditor,
  hideEditor: actions.rule.hideEditor,
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(RuleNew);
