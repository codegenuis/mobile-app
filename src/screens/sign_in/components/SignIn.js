import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field, reduxForm } from 'redux-form';
import { View, Text } from 'native-base';

import styles from './styles';
import { InputText, Buttons, Logo, Loader } from '../../.././components';
import image from './iphone-1.jpg';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    this.props.signIn(values);
  }

  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <ImageBackground
        source={image}
        style={{
            flex: 1,
            width: '100%',
            height: '100%',
          }}
        resizeMode="cover"
      >
        <KeyboardAwareScrollView scrollEnabled style={styles.container}>
          <Loader loading={loading} />
          <Image
            source={Logo}
            style={{ alignSelf: 'center', marginBottom: 20 }}
          />
          <Field name="username" component={InputText} type="text" label="User ID" style={styles.textInput} />
          <Field name="password" component={InputText} type="text" label="Password" style={styles.textInput} />
          <Buttons style={styles.button} onPress={handleSubmit(this.submit)}>
          Sign In
          </Buttons>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={styles.text}>Forgot Password</Text>
            <Text style={styles.text} onPress={() => this.props.navigation.navigate('RegisterScreen')}> New User?Sign Up </Text>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}
export default reduxForm({
  form: 'sign_in'
})(SignIn);
// RegisterForm.propTypes = {
//   loading: PropTypes.bool.isRequired,
// };

