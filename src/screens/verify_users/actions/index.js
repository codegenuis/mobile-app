import { NEW_USER_BEGIN, NEW_USER, NEW_USER_FAIL } from '../constants';


export const verifyUserBegin = () => ({
  type: NEW_USER_BEGIN
});

export const verifyUserSuccess = (verify) => ({
  type: NEW_USER,
  payload: { verify }
});

export const verifyUserFail = error => ({
  type: NEW_USER_FAIL,
  payload: { error }
});
