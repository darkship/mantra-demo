import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RuleUpdate from '../rule_update.jsx';

storiesOf('firewall.RuleUpdate', module)
  .add('default view', () => {
    return (
      <RuleUpdate />
    );
  })
