import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Main from '../components/main.jsx';

export const composer = ({context}, onData) => {
  // const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Main);
