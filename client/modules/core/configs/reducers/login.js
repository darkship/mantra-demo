const defaultState={
	email:"",
	password:"",
	isLoginin:false,
	error:null
}

const LoginReducer=(state=defaultState,action)=>
{
	switch(action.type)
	{
		case 'SET_EMAIL':
			return {...state,email:action.email};
		case 'SET_PASSWORD':
			return {...state,password:action.password};
		case 'SET_ISLOGININ':	
			return {...state,isLoginin:true,error:null};
		case 'SET_ERROR':	
			return {...state,isLoginin:false,error:action.error};
		case 'RESET':		
			return defaultState;
		default:
			return state
		break;
	}	
}
export default LoginReducer;