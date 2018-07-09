import React from 'react';
import { View, Text } from 'react-native';
import { Textarea } from 'native-base';
// import PropTypes from 'prop-types';


const TextareaInput = ({ input, label, meta: { touched, error }, style }) => (
  <View>
    <Textarea
      placeholder={label}
      {...input}
      onChangeText={input.onChange}
      value={input.value}
      style={style}
      rowSpan={5}
      bordered
      placeholderTextColor="#000"
    />
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

export default TextareaInput;
