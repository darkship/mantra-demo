import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RulesetList from '../ruleset_list.jsx';

storiesOf('firewall.RulesetList', module)
  .add('default view', () => {
    return (
      <RulesetList />
    );
  })
