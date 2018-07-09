import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import { RegisterScreen } from './src/screens/register';
import { VerificationScreen } from './src/screens/verify_users';
import { JobAdScreen } from './src/screens/job_ad';
import { SmsAdScreen } from './src/screens/sms_ad';
import { ProfileScreen } from './src/screens/profile';
import { SignInScreen } from './src/screens/sign_in';
import Partnership from './src/screens/partnership_level_selection/components/Partnership';
import SideBar from './src/screens/sidebar/Component/Sidebar';
import { CardScreen } from './src/screens/cards';
import { Wallet, TransactionDetails } from './src/screens/wallet';

// Drawer Navigation
const DrawerStack = createDrawerNavigator(
  {
    PROFILE: {
      screen: ProfileScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Icon name="person-outline" type="MaterialIcons" size={24} style={{ color: tintColor }} />),
      }
    },
    JOB: {
      screen: JobAdScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Icon name="sms" type="MaterialIcons" size={24} style={{ color: tintColor }} />),
      }
    },
    SMS: {
      screen: SmsAdScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Icon name="sms" type="MaterialIcons" size={24} style={{ color: tintColor }} />),
      }
    },
    CARDS: {
      screen: CardScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Icon name="card-giftcard" type="MaterialIcons" size={24} style={{ color: tintColor }} />),
      }
    },
    WALLET: {
      screen: Wallet,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Icon name="credit-card" type="MaterialIcons" size={24} style={{ color: tintColor }} />),
      }
    },
    // SIGNOUT: {
    //   screen: SignOut,
    //   navigationOptions: {
    //     drawerIcon: ({ tintColor }) => (<Icon name="credit-card" type="MaterialIcons" size={24} style={{ color: tintColor }} />),
    //   }
    // }
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'PROFILE',
    drawerBackgroundColor: '#fff',
    drawerWidth: 300,
    contentComponent: props => <SideBar {...props} />
  }
);

// Login Stack navigation
const LoginStack = createStackNavigator(
  {
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
    },
    VerificationScreen: {
      screen: VerificationScreen,
      navigationOptions: {
        title: 'Verify Account',
        headerStyle: {
          backgroundColor: '#158384'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '100',
          alignSelf: 'center'
        },
      }
    },
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: {
        header: null
      }
    },
    PartnershipScreen: {
      screen: Partnership,
      navigationOptions: {
        title: 'Partnership Level',
        headerStyle: {
          backgroundColor: '#158384'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '100',
          alignSelf: 'center'
        },
      }
    },
    ProfileScreen: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'SignInScreen'
  }
);

const AppDrawerNavigator = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
  },
  {
    headerMode: 'none'
  }
);

const AppStackNavigator = createStackNavigator(
  {
    Drawer: AppDrawerNavigator,
    Login: LoginStack
  },
  {
    headerMode: 'none',
    initialRouteName: 'Drawer'
  }
);


export default AppStackNavigator;
