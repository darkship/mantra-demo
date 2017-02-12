import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import SiteList from '../components/site_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('sites').ready()) {
    onData(null,
      {sites: Collections.Sites.find({}, {sort: {title: 1}}).fetch()});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  createSite: actions.site.create,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SiteList);
