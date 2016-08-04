import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Sidebar from '../sidebar.jsx';

storiesOf('firewall.Sidebar', module)
  .add('default view', () => {
    return (
      <Sidebar />
    );
  })
