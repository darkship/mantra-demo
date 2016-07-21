import React from 'react';
import Emailinput from './emailinput';
import Passwordinput from './passwordinput';
import Loginerror from './loginerror';



class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit(e){
    	e.preventDefault();
    	this.props.handleSubmit();
    }
    render() {
        	
	        return (
	    	<div className="login">
	    		<Loginerror  {...this.props}/>
				<form onSubmit={this.onSubmit.bind(this)}>
					<Emailinput value={this.props.email} onChange={this.props.handleEmail}/>
					<Passwordinput value={this.props.password} onChange={this.props.handlePassword}/>
					<button type="submit">Log in</button>
				</form>
			 </div>
		);
    }
}

export default Login;
