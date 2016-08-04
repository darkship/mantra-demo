import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RuleList from '../rule_list.jsx';

storiesOf('firewall.RuleList', module)
  .add('default view', () => {
    return (
      <RuleList />
    );
  })
