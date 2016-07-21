import React from 'react';
import Emailinput from './emailinput';
import Passwordinput from './passwordinput';
import Loginerror from './loginerror';

const Login =(props)=> {
    	const error =(props.error)? <Loginerror  {...props}/> :null;
	        return (
	    	<div className="login">
	        	<error />
				<form onSubmit={props.handleSubmit}>
					<Emailinput value={props.email} onChange={props.handleEmail}/>
					<Passwordinput value={props.password} onChange={props.handlePassword}/>
				</form>
			 </div>
		);
    }




export default Login;
