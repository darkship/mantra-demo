import {createApp} from 'mantra-core';
import {combineReducers} from 'redux';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import firewallModule from './modules/firewall';
import ipModule from './modules/ip';
import video_crawlerModule from './modules/video_crawler';

//reducers
const coreReducer = coreModule.reducers;
const firewallReducer = firewallModule.reducers;
const ipReducer = ipModule.reducers;

const reducers=combineReducers({
	...coreReducer,...firewallReducer,...ipReducer
})

// init context
const context = initContext({reducers});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(firewallModule);
app.loadModule(ipModule);
app.loadModule(video_crawlerModule);
app.init();
