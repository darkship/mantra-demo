import React from 'react';
import Emailinput from './emailinput';
import Passwordinput from './passwordinput';
import Error from './error';
import Registererror from './registererror'
import Spinner from './spinner';

class Register extends  React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit(e){
    	e.preventDefault();
    	this.props.handleSubmit();
    }
    goToLogin(e){
        e.preventDefault(); 
        if(!this.props.registerin)
        this.props.goToLogin();
    }
    render() {
    	return (
	<div className="login">
        <Registererror {...this.props}/>
		<form onSubmit={this.onSubmit.bind(this)}>
			<Emailinput value={this.props.email} onChange={this.props.handleEmail} placeholder='Your email' disabled={this.props.registerin}/>
            {this.props.invalidemail ? (<Error msg='Not an email.'/>) :(null)}
			<Passwordinput value={this.props.password} onChange={this.props.handlePassword} placeholder='Password' disabled={this.props.registerin}/>
            {this.props.invalidpassword ? (<Error msg='Password must have a length greater than 5.'/>) :(null)}
			<Passwordinput value={this.props.passwordverification} onChange={this.props.handlePasswordVerification} placeholder='Password verification' disabled={this.props.registerin}/>
            {this.props.verificationisko ? (<Error msg="Password doesn't match."/>) :(null)}
			{this.props.registerin? (<Spinner/>):(<button type="submit">Register</button>)}
		</form>
		<a href='#' onClick={this.goToLogin.bind(this)}>Login</a>
 	</div>
	)
  }
}

export default Register;
