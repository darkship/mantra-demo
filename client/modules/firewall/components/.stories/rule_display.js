import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RuleDisplay from '../rule_display.jsx';

storiesOf('firewall.RuleDisplay', module)
  .add('default view', () => {
    return (
      <RuleDisplay />
    );
  })
