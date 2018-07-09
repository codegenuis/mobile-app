import { LOGIN_USER_BEGIN, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from '../constants';


// declare all states
const initialState = {
  item: {},
  loading: false,
  error: null
};

export default function signInReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        item: action.payload.user,
        loading: false
      };
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        loading: true
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
