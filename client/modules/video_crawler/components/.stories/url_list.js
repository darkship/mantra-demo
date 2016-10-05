import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import UrlList from '../url_list.jsx';

storiesOf('video_crawler.UrlList', module)
  .add('default view', () => {
    return (
      <UrlList />
    );
  })
