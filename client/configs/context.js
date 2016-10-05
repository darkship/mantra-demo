import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {createStore} from 'redux';
import { Accounts } from 'meteor/accounts-base';

export default function ({reducers}) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Store:new createStore(reducers),
    Tracker,
    Accounts,
    Modules:[{key:'firewall',url:'firewall',name:'Firewall rules'},{key:'ip',url:'ip',name:'My IPs'},{url:'crawler',key:'crawler',name:'Video crawler'}],
  };
}
