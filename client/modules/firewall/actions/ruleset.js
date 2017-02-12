export default {
  create: ({Collections, FlowRouter, Store}) => {
    const ruleSet = new Collections.FirewallRuleSet();
    ruleSet.title = 'New Ruleset';
    ruleSet.save((err, id) => {
      if (err) {
        console.error(err);
      }
    });
    FlowRouter.go('ruleset', {ruleset: ruleSet._id}, {created: true});
    Store.dispatch({type: 'RETRACT'});
  },
  delete: ({Collections, FlowRouter}, _id) => {
    Collections.FirewallRuleSet.remove(_id);
    FlowRouter.go('firewall');
  },
  updateTitle: ({Collections, FlowRouter}, _id, title) => {
    let ruleSet = Collections.FirewallRuleSet.findOne(_id);
    ruleSet.title = title;
    ruleSet.save();
  },
  goToRuleSet({Store, FlowRouter}, _id) {
    FlowRouter.go('ruleset', {ruleset: _id});
    Store.dispatch({type: 'RETRACT'});
  },
  setRules({Store, FlowRouter}, _id) {
    FlowRouter.go('ruleset', {ruleset: _id});
    Store.dispatch({type: 'RETRACT'});
  },
};
