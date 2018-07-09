import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { registerReducer } from '../screens/register';
import { signInReducer } from '../screens/sign_in';
import { verificationReducer } from '../screens/verify_users';

const rootReducer = combineReducers({
  form: formReducer,
  user: registerReducer,
  verify: verificationReducer,
  login: signInReducer
});

export default rootReducer;
