import {LoginReducer} from "../configs/reducers"

export default {
  login:({Meteor,Store})=>
  {
  		const {email,password}=Store.getState().LoginReducer;
  		Store.dispatch({type:'SET_ISLOGININ'})
  		Meteor.loginWithPassword(email, password, (error)=>{
  			if(error)console.error(error)
  			Store.dispatch({type:'SET_ERROR',error})
  		})
  },
  setEmail:({Store},email)=>{
  		Store.dispatch({type:'SET_EMAIL',email})
  },
  setPassword:({Store},password)=>{
  		Store.dispatch({type:'SET_PASSWORD',password})
  }
}
