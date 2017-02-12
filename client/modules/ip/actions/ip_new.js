export default {
  create: ({Collections, Store})=> {
    Store.dispatch({type: 'IP_NEW_SET_ERROR'});
    const {name, host}=Store.getState().IpReducer.IpNew;

    Collections.Ip.insert({name, host}, (error) => {
      if(error) {
        Store.dispatch({type: 'IP_NEW_SET_ERROR', error});
      } else {
        Store.dispatch({type: 'IP_NEW_RESET'});
      }
    });
  },
  setName: ({Store}, name)=>{
    Store.dispatch({type: 'IP_NEW_SET_NAME', name});
  },
  setHost: ({Store}, host)=>{
    Store.dispatch({type: 'IP_NEW_SET_HOST', host});
  },
};
