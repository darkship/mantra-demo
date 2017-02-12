import React from 'react';

const ThreePanelLayout = (
  {
    content = () => null,
    header = () => null,
    aside = () => null,
    rightside = () => null,
    className=''}) => (

  <div className={className}>
    <header className='header'>
      {header()}
    </header>
    {aside()}
    <div className='content'>
      {content()}
    </div>
    <div className='rightside'>
      {rightside()}
    </div>
  </div>
);

export default ThreePanelLayout;
