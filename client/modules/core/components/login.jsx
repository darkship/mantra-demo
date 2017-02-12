import React from 'react';
import Emailinput from './emailinput';
import Passwordinput from './passwordinput';
import Loginerror from './loginerror';
import Spinner from './spinner';

/**
 * login
 */
class Login extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * catches the submit and prevent resubmit when processing the login
   * @param {event} e
   */
  onSubmit(e) {
    e.preventDefault();
    if(!this.props.isLoginin) {
      this.props.handleSubmit();
    }
  }

  /**
   * redirect to register page
   * @param {event} e
   */
  goToRegister(e) {
    e.preventDefault();
    this.props.goToRegister();
  }

  /**
   * renders the login form
   * @return {XML}
   */
  render() {
    return (
      <div className="login">
        <Loginerror {...this.props}/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Emailinput value={this.props.email}
                      onChange={this.props.handleEmail}
                      placeholder='Your email'
                      disabled={this.props.isLoginin}/>
          <Passwordinput value={this.props.password}
                         onChange={this.props.handlePassword}
                         placeholder='Your password'
                         disabled={this.props.isLoginin}/>
          {this.props.isLoginin? (<Spinner/>):
            (<button type="submit" >Log in</button>)}
        </form>
        <a href='#' onClick={this.goToRegister.bind(this)}>Register</a>
      </div>
    );
  }
}

export default Login;
