import { AsyncStorage } from 'react-native';

// import NavigationService from '../NavigationService';

const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  },
  async getToken() {
    try {
      const value = await AsyncStorage.getItem('access_token');
      if (value === null) {
        return true;
      } return false;
    } catch (err) {
      return err;
    }
    // NavigationService.navigate(value ? 'Drawer' : 'Login');
  },
  async deleteToken() {
    await AsyncStorage.removeItem('access_token');
  }
};

console.log(deviceStorage.getToken());

export default deviceStorage;

