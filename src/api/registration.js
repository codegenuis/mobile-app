import { Toast } from 'native-base';

import { newUserBegin, newUserSuccess, newUserFail } from '../screens/register';
import NavigationService from '../../NavigationService';
import url from './constants';
import stringify from './helper';


const createUser = (postData) => dispatch => {
  const values = stringify(postData);
  const query = `mutation {registerUser(newRegistrantData:${values} ) {id}}`;

  dispatch(newUserBegin());
  fetch({ url }, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(response => {
      dispatch(newUserSuccess(response));
      if (response.data != null) {
        Toast.show({
          text: 'Registered Successfully, an OTP has been sent to your mail',

          buttonText: 'Okay',
          duration: 7000
        });
        NavigationService.navigate('VerificationScreen', { userId: response.data.registerUser.id });
      } else { throw new Error('Network response was not ok, Please try again'); }
    })
    .catch(error => {
      dispatch(newUserFail(error));
      Toast.show({
        text: error.message,
        duration: 7000
      });
    });
};


export default (createUser);
