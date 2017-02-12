const defaultState = {
  isExpended: false,
};
const SidebarReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'EXPEND':
    return {...state, isExpended: true};
  case 'RETRACT':
    return {...state, isExpended: false};
  default:
    return state;
  }
};

export default SidebarReducer;
