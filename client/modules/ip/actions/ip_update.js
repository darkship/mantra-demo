export default {
  showEditor: ({Store}, ip) => {
    Store.dispatch({type: 'IP_UPDATER_SET_IP', ip});
  },
  hideEditor: ({Store}) => {
    Store.dispatch({type: 'IP_UPDATER_REMOVE_IP'});
  },
  setName: ({Store}, name) => {
    Store.dispatch({type: 'IP_UPDATER_SET_NAME', name});
  },
  setHost: ({Store}, host) => {
    Store.dispatch({type: 'IP_UPDATER_SET_HOST', host});
  },
  update: ({Collections, Store}) => {
    const {name, host, _id} = Store.getState().IpReducer.IpUpdate;
    Collections.Ip.update(_id, {$set: {name, host}}, (error) => {
      if (error) {
        Store.dispatch({type: 'IP_UPDATER_SET_UPDATER_ERROR', error});
      } else {
        Store.dispatch({type: 'IP_UPDATER_REMOVE_IP'});
      }
    });
  },
  delete: ({Collections}, ip) => {
    ip.remove(ip._id);
  },
};
