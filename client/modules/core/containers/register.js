import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Register from '../components/register.jsx';

export const composer = ({context}, onData) => {
  const {Store} = context();
  const unsubscribe=Store.subscribe(state=>{
    onData(null,Store.getState().RegisterReducer)
  })
  onData(null, Store.getState().RegisterReducer);
  const cleanup = () => {
    unsubscribe();
  };
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  context: () => context,  
  handleSubmit:actions.register.register,
  handleEmail:actions.register.setEmail,
  handlePassword:actions.register.setPassWord,
  handlePasswordVerification:actions.register.setPassWordVerification,
  goToLogin:actions.register.goToLogin
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Register);
