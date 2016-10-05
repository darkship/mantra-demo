import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Site from '../site.jsx';

storiesOf('video_crawler.Site', module)
  .add('default view', () => {
    return (
      <Site />
    );
  })
