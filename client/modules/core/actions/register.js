import checkIfEmail from '/lib/utils/check_if_email';
import checkPasswordFormat from '/lib/utils/check_password_format';

export default {
  goToLogin({FlowRouter}){
  	FlowRouter.go('/login')
  },
  setEmail({Store},email)
  {
  	if(checkIfEmail(email))
  	{
  		Store.dispatch({type:'SET_EMAIL',email:email});
  	}
  	else{
  		Store.dispatch({type:'SET_INVALID_EMAIL',email:email});
  	}
  },
  setPassWord({Store},password){
  	if(checkPasswordFormat(password))
  	{
  		Store.dispatch({type:'SET_PASSWORD',password:password})
  	}
  	else{
  		Store.dispatch({type:'SET_INVALID_PASSWORD',password:password})
  	}
  },
  setPassWordVerification({Store},password){

  	const state=Store.getState().RegisterReducer;
  	if(state.password==password)
	{	
		Store.dispatch({type:'SET_PASSWORD_VERIFICATION',passwordverification:password})
	}
	else{
		Store.dispatch({type:'SET_PASSWORD_VERIFICATION_ERROR',passwordverification:password})
	}
  },
  register({Meteor,Store,Accounts,FlowRouter}){
  	const state=Store.getState().RegisterReducer;
  	if(checkIfEmail(state.email)&&checkPasswordFormat(state.password)&& state.password==state.passwordverification)
  	{
  		Store.dispatch({type:'REGISTER'})
  		Accounts.createUser(state,function(error){
  			if(error)
        {
          console.error(error)
			    Store.dispatch({type:'SET_ERROR',error})
        }
        else{
          Store.dispatch({type:'RESET'})
          FlowRouter.go('/modules')
        }
  		})
  	}

  }
}
