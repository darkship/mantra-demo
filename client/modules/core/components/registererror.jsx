import React from 'react';

const Registererror = ({error}) => {


	if(error)
	{
		let msg='';
		switch (error.error) {
		case 401:
			msg='Your are not allowed to create an account with this email/password';
			break;
		default:
			// statements_def
			break;
		}
		return (<Error msg={msg}/>)			
	}
	return (null)
};

export default Registererror;
