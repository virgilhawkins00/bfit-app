import { View, Text } from 'react-native'
import React from 'react'
import { NavigatorScreenParams } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import DetailsScreen from '../screens/DetailsScreen';
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';

export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabsStackParamList>;
    DetailsScreen: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList> ()

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="TabsStack" component={TabsNavigator} options={{
        headerShown: false,
      }}
      />
      <RootStack.Screen name="DetailsScreen" component={DetailsScreen}/>
    </RootStack.Navigator>
  )
}

export default RootNavigator