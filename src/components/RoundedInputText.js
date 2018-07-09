import React from 'react';
import { View, Text } from 'react-native';
import { Item, Input } from 'native-base';
// import PropTypes from 'prop-types';


const RoundedInputText = ({ input, label, meta: { touched, error }, style, multiline }) => (
  <View>
    <Item regular>
      <Input
        placeholder={label}
        {...input}
        onChangeText={input.onChange}
        value={input.value}
        style={style}
        placeholderTextColor="#000"
        multiline={multiline}
        secureTextEntry={input.name === 'password'}
      />
    </Item>
    {touched &&
      ((error && <Text style={{ color: 'red' }}> {error} </Text>))
    }
  </View>
);

// InputText.propTypes = {
//   input: PropTypes.isRequired,
//   type: PropTypes.isRequired,
//   label: PropTypes.isRequired,
//   meta: PropTypes.isRequired,
//   custom: PropTypes.isRequired
// };

export default RoundedInputText;
