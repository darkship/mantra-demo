import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
  const {Store} = context();
  Store.subscribe(state=>{
  	onData(null,Store.getState().LoginReducer)
  })

  const {LoginReducer}=Store.getState()
  onData(null, LoginReducer);
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  handleSubmit:actions.login.login,
  handleEmail:actions.login.setEmail,
  handlePassword:actions.login.setPassword
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
