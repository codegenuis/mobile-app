import { NEW_USER_BEGIN, NEW_USER, NEW_USER_FAIL, FETCH_COUNTRIES } from '../constants';


export const newUserBegin = () => ({
  type: NEW_USER_BEGIN
});

export const newUserSuccess = (user) => ({
  type: NEW_USER,
  payload: { user }
});

export const newUserFail = error => ({
  type: NEW_USER_FAIL,
  payload: { error }
});
export const fetchCountries = (countries) => ({
  type: FETCH_COUNTRIES,
  payload: { countries }
});
