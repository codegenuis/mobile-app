import React from 'react';
import { ListItem, CheckBox } from 'native-base';

const Checked = ({ input, value }) => (
  <ListItem onPress={input.onChange}>
    <CheckBox
      checked={!!input.value}
      onPress={() => input.onChange(!input.value)}
      value={value}
    />
  </ListItem>
);

export default Checked;

