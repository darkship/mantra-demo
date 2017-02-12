import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import {Mongo} from 'meteor/mongo';
import Site from '../components/site.jsx';

const Queues = new Mongo.Collection('crawlqueue');

export const composer = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter, Counts} = context();
  const siteId = FlowRouter.getParam('id');

  if (Meteor.subscribe('site', siteId).ready()
    && Meteor.subscribe('total_videos', siteId).ready()
    && Meteor.subscribe('crawlqueue', siteId).ready()
) {
    onData(null,
      {
        site: Collections.Sites.findOne(siteId),
        video_count: Counts.get('total_videos_' + siteId),
        crawlqueue: Queues.findOne(siteId),
      });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  setTitle: actions.site.setTitle,
  setPageUrl: actions.site.setPageUrl,
  setMinPage: actions.site.setMinPage,
  setMaxPage: actions.site.setMaxPage,
  remove: actions.site.remove,
  setVideoUrlRegex: actions.site.setVideoUrlRegex,
  crawl: actions.site.crawl,
  setActorSelector: actions.site.setActorSelector,
  setTagSelector: actions.site.setTagSelector,
  toggleSafe: actions.site.toggleSafe,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Site);
