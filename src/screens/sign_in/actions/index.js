import { LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../constants';


export const loginUserBegin = () => ({
  type: LOGIN_USER_BEGIN
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { user }
});

export const loginUserFail = error => ({
  type: LOGIN_USER_FAIL,
  payload: { error }
});

