import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import IpNew from '../ip_new.jsx';

storiesOf('ip.IpNew', module)
  .add('default view', () => {
    return (
      <IpNew />
    );
  })
