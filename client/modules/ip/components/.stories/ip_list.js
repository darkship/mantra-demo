import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import IpList from '../ip_list.jsx';

storiesOf('ip.IpList', module)
  .add('default view', () => {
    return (
      <IpList />
    );
  })
