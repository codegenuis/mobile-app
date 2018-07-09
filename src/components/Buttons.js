import React from 'react';
import { Button, Text } from 'native-base';
// import PropTypes from 'prop-types';

const Buttons = ({ style, onPress, children }) => (
  <Button block light style={style} onPress={onPress}>
    <Text style={{ color: '#fff' }}> {children} </Text>
  </Button>
);

// Buttons.propTypes = {
//   style: PropTypes.shape.isRequired,
//   onPress: PropTypes.shape.isRequired,
//   children: PropTypes.shape.isRequired
// };

export default Buttons;
