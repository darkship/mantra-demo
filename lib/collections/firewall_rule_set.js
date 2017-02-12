import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';


const FirewallRuleSet = Class.create({
  name: 'FirewallRuleSet',
  collection: new Mongo.Collection('firewall_rule_set'),
  fields: {
    title: {
      type: String,
    },
    rule_ids: {
      type: [String],
      default: [],
    },
  },
  secured: false,

});

export default FirewallRuleSet;
