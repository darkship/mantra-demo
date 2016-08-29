import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import IpUpdate from '../ip_update.jsx';

storiesOf('ip.IpUpdate', module)
  .add('default view', () => {
    return (
      <IpUpdate />
    );
  })
