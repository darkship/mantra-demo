import React from 'react';
import Error from './error';
const Loginerror = ({error}) => {

	let msg='';
	if(error)
	switch (error.error) {
		case 401:
			msg='Wrong email/password combination';
			break;
		default:
			// statements_def
			break;
	}

	return (<Error msg={msg}/>)
}

export default Loginerror;
