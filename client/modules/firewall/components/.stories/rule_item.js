import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RuleItem from '../rule_item.jsx';

storiesOf('firewall.RuleItem', module)
  .add('default view', () => {
    return (
      <RuleItem />
    );
  })
