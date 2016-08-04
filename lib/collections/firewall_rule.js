import {Mongo} from 'meteor/mongo';
import { Class  } from 'meteor/jagi:astronomy';

const FirewallRule = Class.create({
  name: 'FirewallRule',
  collection : new Mongo.Collection('firewall_rule'),
  fields: {
  	firewall_rule_set_id:{
		  type:String
  	},
    title:{
    	type:String
    },
    inbound_host:{
    	type:String
    },
    inbound_port:{
    	type:Number
    },
    outbound_host:{
    	type:String
    },
    outbound_port:{
    	type:Number
    },
    action:{
      type:String
    }
  },
  secured: false,

});
export default FirewallRule;
