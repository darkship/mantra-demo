import React from 'react';

const Modulelist = ({Modules}) => (
  	<div className="list-group">
    	{Modules.map(m=>(
	        <a key={m.key} className="list-group-item" href={'/modules/'+m.url}>{m.name}</a>
    	))}
  </div>
);

export default Modulelist;
