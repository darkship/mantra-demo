import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {createStore as Createstore} from 'redux';
import {Accounts} from 'meteor/accounts-base';
import {Counts} from 'meteor/tmeasday:publish-counts';

/**
 * Return global context
 * @param {object} reducers
 * @return {{Meteor, FlowRouter: *, Collections, LocalState: *,
 * Store: StoreCreator, Tracker, Accounts, Modules: [*,*,*]}}
 */
export default ({reducers}) =>{
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Store: new Createstore(reducers),
    Tracker,
    Accounts,
    Counts,
    Modules: [
      {
        key: 'firewall',
        url: 'firewall',
        name: 'Firewall rules',
      }, {
        key: 'ip',
        url: 'ip',
        name: 'My IPs',
      }, {
        url: 'crawler',
        key: 'crawler',
        name: 'Video crawler',
      },
    ],
  };
};
