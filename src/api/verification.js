import { Toast } from 'native-base';

import { verifyUserBegin, verifyUserSuccess, verifyUserFail } from '../screens/verify_users/actions';
import NavigationService from '../../NavigationService';
import url from './constants';
import stringify from './helper';


const verification = (postData) => dispatch => {
  const values = stringify(postData);
  const query = `query {activateAccount(activateAccountInput:${values} ) {id,email}}`;

  dispatch(verifyUserBegin());
  fetch({ url }, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(response => {
      dispatch(verifyUserSuccess(response));
      if (response.data != null) {
        Toast.show({
          text: 'You Account has been activated',
          buttonText: 'Okay',
          duration: 7000
        });
        NavigationService.navigate('PartnershipScreen', { id: response.data.activateAccount.id, email: response.data.activateAccount.email });
      } else { throw new Error('Network response was not ok, Please try again'); }
    })
    .catch(error => {
      dispatch(verifyUserFail(error));
      Toast.show({
        text: error.message,
        duration: 7000
      });
    });
};


export default (verification);
