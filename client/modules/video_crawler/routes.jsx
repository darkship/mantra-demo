import React from 'react';
import {mount} from 'react-mounter';

import ThreePanelLayout from '/client/modules/core/components/three_panel_layout.jsx';
import Header from '/client/modules/core/containers/header';

import Site from '/client/modules/video_crawler/containers/site';
import SiteList from '/client/modules/video_crawler/containers/site_list'


export default (injectDeps, {FlowRouter}) => {
  const ThreePanelLayoutCtx = injectDeps(ThreePanelLayout);

  FlowRouter.route('/modules/crawler', {
    name: 'crawler',
    action() {
      mount(ThreePanelLayoutCtx, {
        header: ()=>(<Header currentModule='crawler'/>),
        aside: ()=>(<SiteList/>),
        // content: () => (<Main />),
        className: 'crawler',
      });
    }
  });
  FlowRouter.route('/modules/crawler/site/:id', {
    name: 'crawler',
    action() {
      mount(ThreePanelLayoutCtx, {
        header: ()=>(<Header currentModule='crawler'/>),
        aside: ()=>(<SiteList/>),
        content: () => (<Site />),
        className: 'crawler',
      });
    },
  });
};

