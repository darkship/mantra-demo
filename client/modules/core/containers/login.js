import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
  const {Store} = context();
  const unsubscribe=Store.subscribe(state=>{
  	onData(null,Store.getState().LoginReducer)
  })
  onData(null, Store.getState().LoginReducer);
  const cleanup = () => {
    unsubscribe();
  };
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  handleSubmit:actions.login.login,
  handleEmail:actions.login.setEmail,
  handlePassword:actions.login.setPassword,
  goToRegister:actions.login.goToRegister
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Login);
