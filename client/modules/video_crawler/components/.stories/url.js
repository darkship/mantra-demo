import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Url from '../url.jsx';

storiesOf('video_crawler.Url', module)
  .add('default view', () => {
    return (
      <Url />
    );
  })
