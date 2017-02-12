export default {
  toggleExpend: ({Store}, isExpended) => {
    if (isExpended) {
      Store.dispatch({type: 'RETRACT'});
    } else {
      Store.dispatch({type: 'EXPEND'});
    }
  },
};
