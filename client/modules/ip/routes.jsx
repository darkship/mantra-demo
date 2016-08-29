import React from 'react';
import {mount} from 'react-mounter';

import ThreePanelLayout from '/client/modules/core/components/three_panel_layout.jsx';
import Header from '/client/modules/core/containers/header';

import Main from '/client/modules/ip/containers/main';

export default function (injectDeps, {FlowRouter}) {
  const ThreePanelLayoutCtx = injectDeps(ThreePanelLayout);

  FlowRouter.route('/modules/ip', {
    name: 'ip',
    action() {
      mount(ThreePanelLayoutCtx, {
       header:()=>(<Header currentModule='ip'/>),
        //aside:()=>(<Sidebar/>),
        content: () => (<Main />),
        className:"ip"
      });
    }
  });
}
