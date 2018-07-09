import React, { Component } from 'react';
import { Image, Picker } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';


import styles from './styles';
import { InputText, Loader, Logo, Buttons, Select } from '../../.././components';
import validate from './form_validation';

class RegisterForm extends Component {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    this.props.fetchCountries();
  }


  submit = (values) => {
    this.props.createUser(values);
  }

  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        style={styles.container}
        scrollEnabled={false}
      >
        <Loader loading={loading} />
        <Image
          source={Logo}
          style={{ alignSelf: 'center', marginBottom: 10 }}
        />
        <Field name="firstName" component={InputText} type="text" label="First name" style={styles.textInput} />
        <Field name="lastName" component={InputText} type="text" label="Last name" style={styles.textInput} />
        <Field name="email" component={InputText} type="email" label="Email" style={styles.textInput} />
        <Field name="phoneNumber" component={InputText} type="text" label="Phone number" style={styles.textInput} />
        <Field name="password" component={InputText} type="password" label="Password" style={styles.textInput} />
        <Field name="country" component={Select} type="text" label="Country">
          <Picker.Item value="" label="Country" />
          {this.props.countries.map((country) =>
            <Picker.Item value={country.name} key={country.name} label={country.name} />)}
        </Field>
        <Buttons style={styles.button} onPress={handleSubmit(this.submit)} >
        Register
        </Buttons>
        <Buttons style={styles.colored} onPress={() => this.props.navigation.navigate('SignInScreen')}>
        SignIn
        </Buttons>
      </KeyboardAwareScrollView>

    );
  }
}

RegisterForm.propTypes = {
  loading: PropTypes.bool.isRequired,
};


export default reduxForm({
  form: 'register_form',
  validate
})(RegisterForm);

