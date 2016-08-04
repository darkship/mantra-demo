import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Modulelist from '../modulelist.jsx';

storiesOf('core.Modulelist', module)
  .add('default view', () => {
    return (
      <Modulelist />
    );
  })
