import { NEW_USER, NEW_USER_BEGIN, NEW_USER_FAIL } from '../constants';


// declare all states
const initialState = {
  token: {},
  loading: false,
  error: null,
  countries: []
};

export default function verificationReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        token: action.payload.verify,
        loading: false
      };
    case NEW_USER_BEGIN:
      return {
        ...state,
        loading: true
      };
    case NEW_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
