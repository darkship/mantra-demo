import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Rule from '../rule.jsx';

storiesOf('firewall.Rule', module)
  .add('default view', () => {
    return (
      <Rule />
    );
  })
