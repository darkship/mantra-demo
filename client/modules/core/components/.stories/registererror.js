import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Registererror from '../registererror.jsx';

storiesOf('core.Registererror', module)
  .add('default view', () => {
    return (
      <Registererror />
    );
  })
