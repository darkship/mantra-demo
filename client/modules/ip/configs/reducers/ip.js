import {combineReducers} from 'redux';

const defaultStateIpNew = {
  name: '',
  host: '',
  error: null,
};

const IpNew = (state = defaultStateIpNew, action) => {
  switch (action.type) {
  case 'IP_NEW_SET_NAME':
    return {...state, name: action.name};
  case 'IP_NEW_SET_HOST':
    return {...state, host: action.host};
  case 'IP_NEW_SET_ERROR':
    return {...state, ERROR: action.error};
  case 'IP_NEW_RESET':
    return defaultStateIpNew;
  default:
    return state;
  }
};

const defaultStateIpUpdate = {
};

const IpUpdate = (state = defaultStateIpUpdate, action) => {
  switch (action.type) {
  case 'IP_UPDATER_SET_IP':
    return {...action.ip};
  case 'IP_UPDATER_REMOVE_IP':
    return defaultStateIpUpdate;
  case 'IP_UPDATER_SET_NAME':
    return {...state, name: action.name};
  case 'IP_UPDATER_SET_HOST':
    return {...state, host: action.host};
  case 'IP_UPDATER_SET_UPDATER_ERROR':
    return {...state, error: action.error};
  default:
    return state;
  }
};
const IpReducer = combineReducers({IpNew, IpUpdate});
export default IpReducer;
