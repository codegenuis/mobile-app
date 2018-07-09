import React from 'react';
import { View, Picker } from 'react-native';
import { Item, Text } from 'native-base';

const Select = ({ input, label, meta: { touched, error }, children }) => (
  <View>
    <Item>
      <Picker
        placeholder={label}
        {...input}
        onValueChange={input.onChange}
        selectedValue={input.value}
        style={{ height: 50, width: 100, flex: 1, color: '#fff' }}
      >
        {children}

      </Picker>
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

export default Select;
