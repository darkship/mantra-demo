import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const actions = ['drop', 'reject', 'alllow'];
const ipRegex= /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const ip={
  type: String,
  validators: [{
    type: 'regexp',
    param: ipRegex,
  }],
};
const port={
  type: Number,
  validators: [
    {
      type: 'gte',
      param: 0,
    },
    {
      type: 'lte',
      param: 65535,
    },
  ],
};
const FirewallRule = Class.create({
  name: 'FirewallRule',
  collection: new Mongo.Collection('firewall_rule'),
  fields: {
    firewall_rule_set_id: {
      type: String,
    },
    title: {
      type: String,
    },
    inbound_host: {
      type: String,
      validators: [{
        type: 'regexp',
        param: ipRegex,
      }],
    },
    inbound_port: {
      type: Number,
      validators: [
        {
          type: 'gte',
          param: 0,
        },
        {
          type: 'lte',
          param: 65535,
        },
      ],
    },
    outbound_host: ip,
    outbound_port: port,
    action: {
      type: String,
      validators: [{
        type: 'choice',
        param: actions,
      }],
    },
  },
  secured: false,

});
export default FirewallRule;
export {ip, FirewallRule};
