import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RuleNew from '../rule_new.jsx';

storiesOf('firewall.RuleNew', module)
  .add('default view', () => {
    return (
      <RuleNew />
    );
  })
