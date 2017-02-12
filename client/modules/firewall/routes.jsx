import React from 'react';
import {mount} from 'react-mounter';

import ThreePanelLayout from '/client/modules/core/components/three_panel_layout.jsx';
import Header from '/client/modules/core/containers/header';
import Sidebar from './containers/sidebar';

import Ruleset from './containers/ruleset'

export default  (injectDeps, {FlowRouter}) => {
  const ThreePanelLayoutCtx = injectDeps(ThreePanelLayout);

  FlowRouter.route('/modules/firewall', {
    name: 'firewall',
    action() {
      mount(ThreePanelLayoutCtx, {
      header:()=>(<Header currentModule='firewall'/>),
        aside:()=>(<Sidebar/>),
        content: () => (<Ruleset />),
        className:"firewall"
      });
    }
  });
  FlowRouter.route('/modules/firewall/:ruleset', {
    name: 'ruleset',
    action() {
      mount(ThreePanelLayoutCtx, {
        header:()=>(<Header currentModule='firewall'/>),
        aside:()=>(<Sidebar/>),
        content: () => (<Ruleset />),
        className:"firewall"
      });
    }
  });
}
