import React from 'react';

const SidebarToggler = ({isExpended,onClick}) => {
	let icone=isExpended?"left":"right"
	return (
	  <div className="sidebarToggler">
	    <button type='button' className='btn btn-xs btn-default' onClick={onClick}>
	    	<span className={'glyphicon glyphicon-chevron-'+icone}></span>
	    </button>
	  </div>
	);
}

export default SidebarToggler;
