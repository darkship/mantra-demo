import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RulesetNew from '../components/ruleset_new.jsx';

export const composer = ({context}, onData) => {
  // const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  onClick: actions.ruleset.create,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RulesetNew);
