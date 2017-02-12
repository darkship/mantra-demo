export default {
  toggleCreator: ({Store}, isShowCreator) => {
    Store.dispatch(
      {type: 'RULE_CREATOR_SHOW_CREATOR', isShowCreator: !isShowCreator});
  },
  showCreator: ({Store}) => {
    Store.dispatch({type: 'RULE_CREATOR_SHOW_CREATOR', isShowCreator: true});
  },
  hideCreator: ({Store}) => {
    Store.dispatch({type: 'RULE_CREATOR_SHOW_CREATOR', isShowCreator: false});
  },
  setTitle: ({Store}, title) => {
    Store.dispatch({type: 'RULE_CREATOR_SET_TITLE', title});
  },
  setInboundHost: ({Store}, inboundHost) => {
    Store.dispatch({type: 'RULE_CREATOR_SET_INBOUND_HOST', inboundHost});
  },
  setInboundPort: ({Store}, inboundPort) => {
    Store.dispatch({type: 'RULE_CREATOR_SET_INBOUND_PORT', inboundPort});
  },
  setOutboundHost: ({Store}, outboundHost) => {
    Store.dispatch({type: 'RULE_CREATOR_SET_OUTBOUND_HOST', outboundHost});
  },
  setOutBoundPort: ({Store}, outboundPort) => {
    Store.dispatch({type: 'RULE_CREATOR_SET_OUTBOUND_PORT', outboundPort});
  },
  setAction: ({Store}, action) => {
    Store.dispatch({type: 'RULE_CREATOR_SET_ACTION', action});
  },
  create: ({Collections, Store, FlowRouter}) => {
    const state = Store.getState().RuleReducer.RuleCreatorReducer;
    const firewallRuleSetId = FlowRouter.getParam('ruleset');
    const {title, inbound_host,
      inbound_port, outbound_host, outbound_port, action} = state;

    let firewallRuleSet =
      Collections.FirewallRuleSet.findOne(firewallRuleSetId);
    const ruleData =
      {title, inbound_host, inbound_port: parseInt(inbound_port), outbound_host,
        outbound_port: parseInt(outbound_port), firewallRuleSetId, action};

    let rule = new Collections.FirewallRule(ruleData);

    rule.validate({simulate: true}, (error) =>{
      if (error) {
        console.error(error);
        Store.dispatch({type: 'RULE_CREATOR_SET_CREATE_ERROR', error});
      } else {
        const ruleId = rule.save();
        firewallRuleSet.set('ruleIds', [ruleId.toString()]
          .concat(firewallRuleSet.ruleIds));
        firewallRuleSet.save();
        Store.dispatch(
          {
            type: 'RULE_CREATOR_SHOW_CREATOR',
            isShowCreator: false,
          });
        FlowRouter.setQueryParams({rule: ruleId, created: true});
      }
    });
  },
  createTest: ({Collections, Store}, firewallRuleSetId) => {
    const state = Store.getState().RuleReducer;
    const {title, inbound_host, inbound_port,
      outbound_host, outbound_port} = state;
    const ruleData = {title, inbound_host, inbound_port,
      outbound_host, outbound_port};
    let rule = new Collections.FirewallRule();
    let firewallRuleSet =
      Collections.FirewallRuleSet.findOne(firewallRuleSetId);

    rule = {...ruleData, firewallRuleSetId};

    rule.validate((err) => {
      if (err) {
        console.error(err);
      } else {
        firewallRuleSet.push('ruleIds', rule.save());
      }
    });
  },
  delete: ({Collections}, rule) => {
    let firewallRuleSet =
      Collections.FirewallRuleSet.findOne(rule.firewallRuleSetId);
    const ruleIds= firewallRuleSet.ruleIds.filter((_id) => _id != rule._id);
    firewallRuleSet.set('ruleIds', ruleIds);
    firewallRuleSet.save();
    rule.remove(rule._id);
  },
  move: ({Collections}, rule, dragIndex, hoverIndex) => {
    let firewallRuleSet =
      Collections.FirewallRuleSet.findOne(rule.firewallRuleSetId);
    const ruleIds = firewallRuleSet.ruleIds;
    const newRuleIds = [].concat(ruleIds);
    newRuleIds.splice(dragIndex, 1);
    newRuleIds.splice(hoverIndex, 0, rule._id);


    firewallRuleSet.set('ruleIds', newRuleIds);
    firewallRuleSet.save();
  },
  showEditor: ({Store}, rule) => {
    console.log('showEditor');
    Store.dispatch({type: 'RULE_UPDATER_SET_RULE', rule});
  },
  hideEditor: ({Store}, rule) => {
    Store.dispatch({type: 'RULE_UPDATER_REMOVE_RULE', rule});
  },
  updateRule: ({Store}, rule) => {
    const state = Store.getState().RuleReducer.RuleUpdaterReducer;
    const {title, inbound_host, inbound_port, outbound_host,
      outbound_port, action} = state;
    const newRule = {title, inbound_host, inbound_port: parseInt(inbound_port),
      outbound_host, outbound_port: parseInt(outbound_port), action};
    rule.set(newRule);
    rule.save();
    Store.dispatch({type: 'RULE_UPDATER_REMOVE_RULE', rule});
  },
  updateTitle: ({Store}, title) => {
    Store.dispatch({type: 'RULE_UPDATER_SET_TITLE', title});
  },
  updateInboundHost: ({Store}, inboundHost) => {
    Store.dispatch({type: 'RULE_UPDATER_SET_INBOUND_HOST', inboundHost});
  },
  updateInboundPort: ({Store}, inboundPort) => {
    Store.dispatch({type: 'RULE_UPDATER_SET_INBOUND_PORT', inboundPort});
  },
  updateOutboundHost: ({Store}, outboundHost) => {
    Store.dispatch({type: 'RULE_UPDATER_SET_OUTBOUND_HOST', outboundHost});
  },
  updateOutBoundPort: ({Store}, outboundPort) => {
    Store.dispatch({type: 'RULE_UPDATER_SET_OUTBOUND_PORT', outboundPort});
  },
  updateAction: ({Store}, action) => {
    Store.dispatch({type: 'RULE_UPDATER_SET_ACTION', action});
  },
};
