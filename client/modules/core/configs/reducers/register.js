const defaultState = {
  email: '',
  invalidemail: false,
  password: '',
  invalidpassword: false,
  passwordverification: '',
  verificationisko: false,
  registerin: false,
  error: null,
};

const RegisterReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'SET_EMAIL':
    return {...state, email: action.email, invalidemail: false};
  case 'SET_INVALID_EMAIL':
    return {...state, email: action.email, invalidemail: true};
  case 'SET_PASSWORD':
    return {...state, password: action.password, invalidpassword: false};
  case 'SET_INVALID_PASSWORD':
    return {...state, password: action.password, invalidpassword: true};
  case 'SET_PASSWORD_VERIFICATION':
    return {
      ...state,
      passwordverification: action.passwordverification,
      verificationisko: false,
    };
  case 'SET_PASSWORD_VERIFICATION_ERROR':
    return {
      ...state,
      passwordverification: action.passwordverification,
      verificationisko: true,
    };
  case 'REGISTER':
    return {...state, registerin: true, error: null};
  case 'SET_ERROR':
    return {...state, registerin: false, error: action.error};
  case 'RESET':
    return defaultState;
  default:
    return state;
  }
};
export default RegisterReducer;
