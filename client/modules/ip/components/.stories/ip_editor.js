import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import IpEditor from '../ip_editor.jsx';

storiesOf('ip.IpEditor', module)
  .add('default view', () => {
    return (
      <IpEditor />
    );
  })
