import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Text,
  Icon,
  List,
  ListItem
} from 'native-base';

import NavigationService from '../../../../NavigationService';
import deviceStorage from '../../../device_storage';
import styles from './style';


const menuItems = [
  {
    link: 'PROFILE',
    icon: 'account-circle',
    text: 'PROFILE'
  },
  {
    link: 'SMS',
    icon: 'message-bulleted',
    text: 'SMS'
  },
  {
    link: 'JOB',
    icon: 'message-reply-text',
    text: 'JOB'
  },
  {
    link: 'CARDS',
    icon: 'credit-card-multiple',
    text: 'CARDS'
  },
  {
    link: 'WALLET',
    icon: 'cash-multiple',
    text: 'WALLET'
  }
];

const resetAction = () => {
  deviceStorage.deleteToken('access_token');
  NavigationService.navigate('Login');
};

const SideBar = (props) => (
  <Container>
    <Content style={styles.drawerContent}>
      <View style={styles.headerView} />
      <View style={styles.menuView}>
        <List
          dataArray={menuItems}
          renderRow={menuItemRow => (<ListItem
            button
            iconLeft
            noBorder
            style={{ paddingTop: 8, paddingBottom: 4 }}
            onPress={() => {
                    props.navigation.navigate(menuItemRow.link);
                  }}
          >
            <View style={{ ...styles.menuIconContainerView,
                ...{ backgroundColor: menuItemRow.bg } }}
            >
              <Icon name={menuItemRow.icon} style={styles.menuIcon} type="MaterialCommunityIcons" size={24} />
            </View>
            <Text style={styles.menuItemText}>
              {menuItemRow.text}
            </Text>
                                     </ListItem>
             )}
        />
        <ListItem
          button
          iconLeft
          noBorder
          style={{ paddingTop: 5 }}
          onPress={() => resetAction()}
        >
          <View
            style={{
                  ...styles.menuIconContainerView,
                  ...{ backgroundColor: 'transparent' }
                }}
          >
            <Icon name="logout-variant" style={styles.menuIcon} type="MaterialCommunityIcons" />
          </View>
          <Text style={styles.menuItemText}>Log Out</Text>
        </ListItem>
      </View>
    </Content>
  </Container>
);

export default SideBar;
