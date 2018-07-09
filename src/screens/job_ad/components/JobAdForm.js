import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field, reduxForm } from 'redux-form';
import { Header, Body, Title, Container } from 'native-base';

import styles from './styles';
import { RoundedInputText, Buttons, Textarea, MenuButton } from '../../.././components';

class JobAdForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

    submit = () => {
      // this.props.createUser(values);
    }

    render() {
      const { handleSubmit, navigation } = this.props;
      return (
        <Container>
          <Header style={{ backgroundColor: '#158384' }}>
            <MenuButton onPress={() => navigation.openDrawer()} />
            <Body>
              <Title>Job AD</Title>
            </Body>
          </Header>
          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            style={styles.container}
            scrollEnabled
          >
            <View style={styles.form}>
              <Field name="business name" component={RoundedInputText} type="text" label="Business name" style={styles.textInput} />
              <Field name="Location" component={RoundedInputText} type="text" label="Location" style={styles.textInput} />
              <Field name="Description" component={Textarea} type="text" label="Description" style={styles.textInput} />
              <Buttons style={styles.button} onPress={handleSubmit(this.submit)} >
              Submit
              </Buttons>
            </View>
          </KeyboardAwareScrollView>
        </Container>

      );
    }
}

export default reduxForm({
  form: 'job_ad_form'
})(JobAdForm);
