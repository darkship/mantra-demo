import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import SiteItem from '../site_item.jsx';

storiesOf('video_crawler.SiteItem', module)
  .add('default view', () => {
    return (
      <SiteItem />
    );
  })
