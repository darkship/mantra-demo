import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Main from '../main.jsx';

storiesOf('ip.Main', module)
  .add('default view', () => {
    return (
      <Main />
    );
  })
