export default {
  create: ({FlowRouter, Collections}) => {
    const site = new Collections.Sites({title: 'new site'});
    const _id = site.save();
    FlowRouter.go('/modules/crawler/site/' + _id);
  },
  setTitle: (context, site, title) => {
    site.set({title});
    site.save();
  },
  setPageUrl: (context, site, pageUrl) => {
    site.set({pageUrl});
    site.save();
  },
  setMinPage: (context, site, minPage) => {
    site.set({minPage});
    site.save();
  },
  setMaxPage: (context, site, maxPage) => {
    site.set({maxPage});
    site.save();
  },
  remove: ({FlowRouter}, site) => {
    site.remove();
    FlowRouter.go('/modules/crawler/');
  },
  setVideoUrlRegex: (context, site, videoUrlRegex) => {
    site.set({videoUrlRegex});
    site.save();
  },
  setActorSelector: (context, site, actorSelector) => {
    site.set({actorSelector});
    site.save();
  },
  setTagSelector: (context, site, tagSelector) => {
    site.set({tagSelector});
    site.save();
  },
  crawl: ({Meteor}, site) => {
    Meteor.call('crawl.crawl', site._id);
  },
  toggleSafe: ({Collections}, site) => {
    site.set({unsafe: !site.unsafe});
    site.save();
  },
};
