import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import IpItem from '../components/ip_item.jsx';



export const depsMapper = (context, actions) => ({
  context: () => context,
  edit:actions.ip_update.showEditor,
  hide:actions.ip_update.hideEditor,
  onChangeName:actions.ip_update.setName,
  onChangeHost:actions.ip_update.setHost,
  onSubmit:actions.ip_update.update,
  delete:actions.ip_update.delete
});

export default composeAll(
  useDeps(depsMapper)
)(IpItem);
