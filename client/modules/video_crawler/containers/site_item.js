import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import SiteItem from '../components/site_item.jsx';

export const composer = ({context, site}, onData) => {
  const {FlowRouter} = context();
  onData(null, {isactive: FlowRouter.getParam('id') == site._id});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SiteItem);
