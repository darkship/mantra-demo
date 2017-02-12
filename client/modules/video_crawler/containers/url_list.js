import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UrlList from '../components/url_list.jsx';

export const composer = ({context}, onData) => {
  // const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UrlList);
