import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Header from '../components/header.jsx';

export const composer = ({context}, onData) => {
  const {Modules} = context();
  onData(null, {
    Modules,
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  logout: actions.header.logout,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)

)(Header);
