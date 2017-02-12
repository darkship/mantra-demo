import {useDeps, composeAll, compose} from 'mantra-core';

import Sidebar from '../components/sidebar.jsx';

export const composer = ({context}, onData) => {
  const {Store} = context();
  const unsub = Store.subscribe(() => {
    onData(null, Store.getState().SidebarReducer);
  });
  onData(null, Store.getState().SidebarReducer);
  const cleanup = () => {
    unsub();
  };
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  toggleExpend: actions.sidebar.toggleExpend,
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Sidebar);
