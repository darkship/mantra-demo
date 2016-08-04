import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RuleEditor from '../rule_editor.jsx';

storiesOf('firewall.RuleEditor', module)
  .add('default view', () => {
    return (
      <RuleEditor />
    );
  })
