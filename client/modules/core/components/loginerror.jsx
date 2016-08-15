import React from 'react';
import Error from './error';

const Loginerror = ({error}) => {
	
	if(error)
	{
		let msg='';
		switch (error.error) {
		case 401:
		case 403:
			msg='Wrong email/password combination';
			break;
		default:
			// statements_def
			break;
		}
		return (<Error msg={msg}/>)			
	}
	return (null);
}

export default Loginerror;
