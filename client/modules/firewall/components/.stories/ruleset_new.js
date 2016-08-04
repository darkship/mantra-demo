import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RulesetNew from '../ruleset_new.jsx';

storiesOf('firewall.RulesetNew', module)
  .add('default view', () => {
    return (
      <RulesetNew />
    );
  })
