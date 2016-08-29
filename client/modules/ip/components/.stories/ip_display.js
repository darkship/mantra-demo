import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import IpDisplay from '../ip_display.jsx';

storiesOf('ip.IpDisplay', module)
  .add('default view', () => {
    return (
      <IpDisplay />
    );
  })
