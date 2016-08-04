import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Ruleset from '../ruleset.jsx';

storiesOf('firewall.Ruleset', module)
  .add('default view', () => {
    return (
      <Ruleset />
    );
  })
