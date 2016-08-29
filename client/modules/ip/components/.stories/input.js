import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Input from '../input.jsx';

storiesOf('ip.Input', module)
  .add('default view', () => {
    return (
      <Input />
    );
  })
