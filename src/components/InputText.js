import React from 'react';
import { View, Text } from 'react-native';
import { Item, Input } from 'native-base';
// import PropTypes from 'prop-types';


const InputText = ({ input, label, meta: { touched, error }, style, keyboardType }) => (
  <View>
    <Item>
      <Input
        placeholder={label}
        {...input}
        onChangeText={input.onChange}
        value={input.value}
        style={style}
        keyboardType={keyboardType}
        placeholderTextColor="#fff"
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

export default InputText;
