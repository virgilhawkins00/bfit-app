import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../screens/LoginScreen';
import {SettingScreen} from '../screens/SettingScreen';
import { SignInScreen } from '../screens/SignUpScreen/SignInScreen';

// interface App

export interface AppParamList {
  Home: undefined;
  Settings: undefined;
}
const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={SignInScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}