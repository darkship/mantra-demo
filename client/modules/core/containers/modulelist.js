import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Modulelist from '../components/modulelist.jsx';

export const composer = ({context}, onData) => {
  const {Modules} = context();
  onData(null, {
    Modules,
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Modulelist);
