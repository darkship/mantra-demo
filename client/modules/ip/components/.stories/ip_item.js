import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import IpItem from '../ip_item.jsx';

storiesOf('ip.IpItem', module)
  .add('default view', () => {
    return (
      <IpItem />
    );
  })
