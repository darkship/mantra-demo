import {createApp} from 'mantra-core';
import {combineReducers} from 'redux';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import firewallModule from './modules/firewall';

//reducers
const coreReducer = coreModule.reducers;
const firewallReducer = firewallModule.reducers;
const reducers=combineReducers({
	...coreReducer,...firewallReducer
})

// init context
const context = initContext({reducers});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(firewallModule);
app.init();
