import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ThreePanelLayout from '../three_panel_layout.jsx';

storiesOf('core.ThreePanelLayout', module)
  .add('default view', () => {
    return (
      <ThreePanelLayout />
    );
  })
