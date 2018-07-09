import { Component } from 'react';

import deviceStorage from '../../../device_storage';

class SignOut extends Component {
  componentWillMount() {
    deviceStorage.deleteToken();
    this.props.navigation.navigate('Login');
  }
}

export default SignOut;
