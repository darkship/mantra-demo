import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {Mongo} from 'meteor/mongo';
import Site from '../components/site.jsx';

const Queues=new Mongo.Collection("crawlqueue")

export const composer = ({context}, onData) => {
	const {Meteor, Collections,FlowRouter} = context();
	const site_id=FlowRouter.getParam('id')

	if(Meteor.subscribe("site",site_id).ready()
		&& Meteor.subscribe('total_videos',site_id).ready()
		&& Meteor.subscribe('crawlqueue',site_id).ready()
		){
		onData(null,
  			{
  				site:Collections.Sites.findOne(site_id),
  				video_count:Counts.get('total_videos_'+site_id),
  				crawlqueue:Queues.findOne(site_id)
  			});
	}
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  setTitle:actions.site.setTitle,
  setPageUrl:actions.site.setPageUrl,
  setMinPage:actions.site.setMinPage,
  setMaxPage:actions.site.setMaxPage,
  remove:actions.site.remove,
  setVideoUrlRegex:actions.site.setVideoUrlRegex,
  crawl:actions.site.crawl,
  setActorSelector:actions.site.setActorSelector,
  setTagSelector:actions.site.setTagSelector,
  toggleSafe:actions.site.toggleSafe
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Site);
