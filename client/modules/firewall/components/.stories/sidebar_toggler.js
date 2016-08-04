import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import SidebarToggler from '../sidebar_toggler.jsx';

storiesOf('firewall.SidebarToggler', module)
  .add('default view', () => {
    return (
      <SidebarToggler />
    );
  })
