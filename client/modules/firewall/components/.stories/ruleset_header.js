import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RulesetHeader from '../ruleset_header.jsx';

storiesOf('firewall.RulesetHeader', module)
  .add('default view', () => {
    return (
      <RulesetHeader />
    );
  })
