import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import SiteList from '../site_list.jsx';

storiesOf('video_crawler.SiteList', module)
  .add('default view', () => {
    return (
      <SiteList />
    );
  })
