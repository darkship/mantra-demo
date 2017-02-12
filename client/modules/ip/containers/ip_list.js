import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import IpList from '../components/ip_list.jsx';

export const composerSubscribe = ({context, filter}, onData) => {
  const {Meteor, Collections} = context();
  let query = {};
  if (filter) {
    if (filter.name && filter.name.length)
      query.name = {regex: filter.name, option: 'i'};
    if (filter.host && filter.host.length)
      query.host = {regex: filter.host, option: 'i'};
  }

  if (Meteor.subscribe('ips', filter).ready()) {
    onData(null, {ips: Collections.Ip.find(query, {sort: {name: 1}}).fetch()});
  }
};
export const composerStore = ({context}, onData) => {
  const {Store} = context();

  const unsub = Store.subscribe(() => {
    onData(null, {editor: Store.getState().IpReducer.IpUpdate});
  });
  onData(null, {editor: Store.getState().IpReducer.IpUpdate});
  const unsubscribe = () => {
    unsub();
  };
  return unsubscribe;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composerSubscribe),
  compose(composerStore),
  useDeps(depsMapper)
)(IpList);
