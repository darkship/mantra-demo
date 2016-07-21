import {createApp} from 'mantra-core';
import {combineReducers} from 'redux';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';

//reducers
const coreReducer = coreModule.reducers
const reducers=combineReducers({
	...coreReducer
})

// init context
const context = initContext({reducers});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
