import { NEW_USER, NEW_USER_BEGIN, NEW_USER_FAIL, FETCH_COUNTRIES } from '../constants';


// declare all states
const initialState = {
  item: {},
  loading: false,
  error: null,
  countries: []
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        item: action.payload.user,
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
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload.countries
      };
    default:
      return state;
  }
}
