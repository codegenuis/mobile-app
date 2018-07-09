/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider, Root } from 'native-base';
import SplashScreen from 'react-native-splash-screen';


import AppStackNavigator from './routes';
import NavigationService from './NavigationService';
import store from './src/store';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import deviceStorage from './src/device_storage';

class App extends Component {
  componentWillMount() {
    SplashScreen.hide();
    deviceStorage.getToken();
  }
  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(material)}>
          <Provider store={store}>
            <AppStackNavigator
              ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
            />
          </Provider>
        </StyleProvider>
      </Root>
    );
  }
}

export default App;
