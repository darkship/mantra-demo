import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RulesetItem from '../ruleset_item.jsx';

storiesOf('firewall.RulesetItem', module)
  .add('default view', () => {
    return (
      <RulesetItem />
    );
  })
