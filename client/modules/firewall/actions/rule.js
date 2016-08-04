export default {
	toggleCreator:({Store},isShowCreator)=>{
		Store.dispatch({type:'RULE_CREATOR_SHOW_CREATOR',isShowCreator:!isShowCreator})
	},
  	showCreator:({Store})=>{
		Store.dispatch({type:'RULE_CREATOR_SHOW_CREATOR',isShowCreator:true})
	},
	hideCreator:({Store})=>{
		Store.dispatch({type:'RULE_CREATOR_SHOW_CREATOR',isShowCreator:false})
	},
	setTitle:({Store},title)=>{
		Store.dispatch({type:'RULE_CREATOR_SET_TITLE',title})
	},
	setInboundHost:({Store},inbound_host)=>{
		Store.dispatch({type:'RULE_CREATOR_SET_INBOUND_HOST',inbound_host})
	},
	setInboundPort:({Store},inbound_port)=>{
		Store.dispatch({type:'RULE_CREATOR_SET_INBOUND_PORT',inbound_port})
	},
	setOutboundHost:({Store},outbound_host)=>{
		Store.dispatch({type:'RULE_CREATOR_SET_OUTBOUND_HOST',outbound_host})
	},
	setOutBoundPort:({Store},outbound_port)=>{
		Store.dispatch({type:'RULE_CREATOR_SET_OUTBOUND_PORT',outbound_port})
	},
	create:({Collections,Store,FlowRouter})=>{
		const state=Store.getState().RuleReducer.RuleCreatorReducer;
		const firewall_rule_set_id=FlowRouter.getParam('ruleset');
		const {title,inbound_host,inbound_port,outbound_host,outbound_port}=state;

		
		let firewall_rule_set= Collections.FirewallRuleSet.findOne(firewall_rule_set_id)
		const ruleData={title,inbound_host,inbound_port:parseInt(inbound_port),outbound_host,outbound_port:parseInt(outbound_port),firewall_rule_set_id};
		
		let rule=new Collections.FirewallRule(ruleData);
		
		rule.validate({simulate:true},function(error){
			if(error)
			{
				console.error(error);
				Store.dispatch({type:'RULE_CREATOR_SET_CREATE_ERROR',error});
			}
			else{
				const ruleId=rule.save();
				firewall_rule_set.set('rule_ids',[ruleId.toString()].concat(firewall_rule_set.rule_ids));
				firewall_rule_set.save();
				Store.dispatch({type:'RULE_CREATOR_SHOW_CREATOR',isShowCreator:false});
				FlowRouter.setQueryParams({rule:ruleId,created:true})
			}
		})

	},
	createTest:({Collections,Store},firewall_rule_set_id)=>{
		const state=Store.getState().RuleReducer
		const ruleData={title,inbound_host,inbound_port,outbound_host,outbound_port}=state;

		let rule=new Collections.FirewallRule();
		let firewall_rule_set= Collections.FirewallRuleSet.findOne(firewall_rule_set_id)

		rule={...ruleData,firewall_rule_set_id};

		rule.validate(function(err){
			if(err)
			{
				console.error(err)
			}
			else{
				firewall_rule_set.push('rule_ids',rule.save())
			}
		})

	},
	delete:({Collections},rule)=>{

		let firewall_rule_set=Collections.FirewallRuleSet.findOne(rule.firewall_rule_set_id);
		firewall_rule_set.set('rule_ids',firewall_rule_set.rule_ids.filter(_id=>_id!=rule._id));
		firewall_rule_set.save()
		rule.remove(rule._id)
	},
	move:({Collections},rule,dragIndex, hoverIndex)=>{
		let firewall_rule_set=Collections.FirewallRuleSet.findOne(rule.firewall_rule_set_id);
		const rule_ids=firewall_rule_set.rule_ids
		const new_rule_ids=[].concat(rule_ids)//(([].concat(rule_ids)).splice(dragIndex, 1)).;
			new_rule_ids.splice(dragIndex, 1);
			new_rule_ids.splice(hoverIndex, 0, rule._id)

		
		firewall_rule_set.set('rule_ids',new_rule_ids);
		firewall_rule_set.save();
	},
	showEditor:({Store},rule)=>{
		console.log('showEditor')
		Store.dispatch({type:'RULE_UPDATER_SET_RULE',rule})
	},
	hideEditor:({Store},rule)=>{
		Store.dispatch({type:'RULE_UPDATER_REMOVE_RULE',rule});
	},
	updateRule:({Store},rule)=>{
		const state=Store.getState().RuleReducer.RuleUpdaterReducer
		const {title,inbound_host,inbound_port,outbound_host,outbound_port}=state;
		const newRule={title,inbound_host,inbound_port:parseInt(inbound_port),outbound_host,outbound_port:parseInt(outbound_port)}
		rule.set(newRule)
		rule.save();
		Store.dispatch({type:'RULE_UPDATER_REMOVE_RULE',rule})
	},
	updateTitle:({Store},title)=>{
		Store.dispatch({type:'RULE_UPDATER_SET_TITLE',title})
	},
	updateInboundHost:({Store},inbound_host)=>{
		Store.dispatch({type:'RULE_UPDATER_SET_INBOUND_HOST',inbound_host})
	},
	updateInboundPort:({Store},inbound_port)=>{
		Store.dispatch({type:'RULE_UPDATER_SET_INBOUND_PORT',inbound_port})
	},
	updateOutboundHost:({Store},outbound_host)=>{
		Store.dispatch({type:'RULE_UPDATER_SET_OUTBOUND_HOST',outbound_host})
	},
	updateOutBoundPort:({Store},outbound_port)=>{
		Store.dispatch({type:'RULE_UPDATER_SET_OUTBOUND_PORT',outbound_port})
	},

}
