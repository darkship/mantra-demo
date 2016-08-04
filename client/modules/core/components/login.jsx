import React from 'react';
import Emailinput from './emailinput';
import Passwordinput from './passwordinput';
import Loginerror from './loginerror';
import Spinner from './spinner';


class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit(e){
    	e.preventDefault();
    	if(!this.props.isLoginin)
    		this.props.handleSubmit();
    }
    goToRegister(e){
    	e.preventDefault()
    	this.props.goToRegister()
    }
    render() {
	        return (
	    	<div className="login">
	    		<Loginerror  {...this.props}/>
				<form onSubmit={this.onSubmit.bind(this)}>
					<Emailinput value={this.props.email} onChange={this.props.handleEmail} placeholder='Your email' disabled={this.props.isLoginin}/>
					<Passwordinput value={this.props.password} onChange={this.props.handlePassword} placeholder='Your password' disabled={this.props.isLoginin}/>
					{this.props.isLoginin? (<Spinner/>):(<button type="submit" >Log in</button>)}
					
				</form>
				<a href='#' onClick={this.goToRegister.bind(this)}>Register</a>
			 </div>
		);
    }
}

export default Login;
