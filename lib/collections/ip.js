import {Mongo} from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

const Address = Class.create({
  name: 'Address',
  fields:{
    host:{
      type:String,
      validators:[{
        type: 'regexp',
        param: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      }]
    },
    name:{
      type:String,
    }
  }
})
const Ip = Address.inherit({
  name: 'Ip',
  secured: false,
  collection : new Mongo.Collection('ip'),
})
export default Ip;
export {Address,Ip}
