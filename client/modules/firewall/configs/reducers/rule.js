import { combineReducers } from 'redux';

const ruleCreatorDefaultState={
	isShowCreator:false,
	title:'',
	inbound_host:'',
	inbound_port:'',
	outbound_host:'',
	outbound_port:'',
	autoFocus:true
};

const RuleCreatorReducer=(state=ruleCreatorDefaultState,action)=>{
	switch(action.type)
	{
		case 'RULE_CREATOR_SHOW_CREATOR':
			return {...ruleCreatorDefaultState,isShowCreator:action.isShowCreator};
		case 'RULE_CREATOR_SET_TITLE':
			return {...state,title:action.title};
		case 'RULE_CREATOR_SET_INBOUND_HOST':
			return {...state,inbound_host:action.inbound_host};
		case 'RULE_CREATOR_SET_INBOUND_PORT':
			return {...state,inbound_port:action.inbound_port};
		case 'RULE_CREATOR_SET_OUTBOUND_HOST':
			return {...state,outbound_host:action.outbound_host};
		case 'RULE_CREATOR_SET_OUTBOUND_PORT':
			return {...state,outbound_port:action.outbound_port};
		case 'RULE_CREATOR_SET_ACTION':
				return {...state,action:action.action};
		case 'RULE_CREATOR_SET_CREATE_ERROR':
			return {...state,error:action.error};
		default:
			return state;
	}
};

const ruleEditorDefaultState={

};

const RuleUpdaterReducer=(state=ruleEditorDefaultState,action)=>{

	switch(action.type)
	{
		case 'RULE_UPDATER_SET_RULE':
			return {...action.rule}

		case 'RULE_UPDATER_REMOVE_RULE':
			return ruleEditorDefaultState;
		case 'RULE_UPDATER_SET_TITLE':
			return {...state,title:action.title};
		case 'RULE_UPDATER_SET_INBOUND_HOST':
			 return{...state,inbound_host:action.inbound_host};

		case 'RULE_UPDATER_SET_INBOUND_PORT':
			 return{...state,inbound_port:action.inbound_port};

		case 'RULE_UPDATER_SET_OUTBOUND_HOST':
			 return{...state,outbound_host:action.outbound_host};

		case 'RULE_UPDATER_SET_OUTBOUND_PORT':
			return{...state,outbound_port:action.outbound_port};

		case 'RULE_UPDATER_SET_UPDATER_ERROR':
			return {...state,error:action.error};
		case 'RULE_UPDATER_SET_ACTION':
				return {...state,action:action.action};
		default:
			return state
			break;
	}
}

const RuleReducer=combineReducers({
	RuleCreatorReducer,
	RuleUpdaterReducer
})
export default RuleReducer;
