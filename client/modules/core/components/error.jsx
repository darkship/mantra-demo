import React from 'react';

const Error = ({msg}) => (
  <div className="error">
    {(msg && msg.length)?msg:'An error occurred.'}
  </div>
);

export default Error;
