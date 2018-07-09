import React from 'react';
import { Button, Left, Icon } from 'native-base';

const MenuButton = ({ onPress }) => (
  <Left>
    <Button onPress={onPress} transparent>
      <Icon name="menu" />
    </Button>
  </Left>
);

export default MenuButton;
