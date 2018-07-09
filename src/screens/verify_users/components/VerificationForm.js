import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { InputText, Buttons, Loader } from '../../.././components';
import styles from './styles';

class VerificationForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

    submit = (values) => {
      const token = values.n + values.a + values.m + values.e + values.f + values.d;
      const userid = this.props.navigation.getParam('userId', '');
      const val = { userId: `${userid}`, token: `${token}` };
      this.props.verification(val);
    };


    render() {
      const { handleSubmit, loading } = this.props;
      return (
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          style={styles.container}
          scrollEnabled={false}
        >
          <Loader loading={loading} />
          <Text style={styles.text}> Enter OTP Code </Text>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.view}>
              <Field name="n" component={InputText} type="text" style={styles.textInput} keyboardType="numeric" />
            </View>
            <View style={styles.view}>
              <Field name="a" component={InputText} type="text" style={styles.textInput} keyboardType="numeric" />
            </View>
            <View style={styles.view}>
              <Field name="m" component={InputText} type="text" style={styles.textInput} keyboardType="numeric" />
            </View>
            <View style={styles.view}>
              <Field name="e" component={InputText} type="text" style={styles.textInput} keyboardType="numeric" />
            </View>
            <View style={styles.view}>
              <Field name="f" component={InputText} type="text" style={styles.textInput} keyboardType="numeric" />
            </View>
            <View style={styles.view}>
              <Field name="d" component={InputText} type="text" style={styles.textInput} keyboardType="numeric" />
            </View>
          </View>
          <Buttons style={styles.button} onPress={handleSubmit(this.submit)} >
        Submit
          </Buttons>
        </KeyboardAwareScrollView>
      );
    }
}

export default reduxForm({
  form: 'verification_form',
})(VerificationForm);

