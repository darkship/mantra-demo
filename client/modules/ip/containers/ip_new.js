import {useDeps, composeAll, compose} from 'mantra-core';

import IpNew from '../components/ip_new.jsx';

export const composer = ({context}, onData) => {
  const {Store} = context();

  const unsub = Store.subscribe(() => {
    onData(null, Store.getState().IpReducer.IpNew);
  });
  onData(null, Store.getState().IpReducer.IpNew);

  const unsubscribe = () => {
    unsub();
  };
  return unsubscribe;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  onSubmit: actions.ip_new.create,
  onChangeName: actions.ip_new.setName,
  onChangeHost: actions.ip_new.setHost,
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(IpNew);
