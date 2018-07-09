import { Toast } from 'native-base';

import { url, clientId, clientSecret, grantType } from './constants';
import { loginUserBegin, loginUserSuccess, loginUserFail } from '../screens/sign_in/actions';
import NavigationService from '../../NavigationService';
import stringify from './helper';
import deviceStorage from '../device_storage';


const signIn = (postData) => dispatch => {
  let values = Object.assign(postData, { clientId, clientSecret, grantType });
  values = stringify(values);
  const query = `mutation {loginUser(loginCredentialInput:${values} ) {access_token, token_type, expires_in, example_parameter, scope, state}}`;
  dispatch(loginUserBegin());
  fetch({ url }, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(response => {
      dispatch(loginUserSuccess(response));
      if (response.data === null) {
        deviceStorage.saveItem('access_token', 'abc');
        NavigationService.navigate('Drawer');
      } else { throw new Error('Network response was not ok, Please try again'); }
    })
    .catch(error => {
      dispatch(loginUserFail(error));
      Toast.show({
        text: error.message,
        duration: 7000
      });
    });
};

export default signIn;

