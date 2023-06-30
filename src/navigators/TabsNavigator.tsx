import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DailyWorkoutScreen from '../screens/DailyWorkoutScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import DietsScreen from '../screens/DietsScreen';
import Icons from "@expo/vector-icons/MaterialIcons";

export type TabsStackParamList = {
   Home: undefined; 
   DailyGoals: undefined;
   Workout: undefined;
   Diet: undefined;
   Profile: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>()

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator screenOptions={{
        tabBarShowLabel: false
    }}>
      <TabsStack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
        tabBarIcon(props) {
            return <Icons name="home" {...props}/>
        },
      }}/>
      <TabsStack.Screen name="DailyGoals" component={DailyWorkoutScreen} options={{
        headerShown: false,
        tabBarIcon(props) {
            return <Icons name="today" {...props}/>
        },
      }}/>
      <TabsStack.Screen name="Workout" component={WorkoutScreen} options={{
        headerShown: false,
        tabBarIcon(props) {
            return <Icons name="fitness-center" {...props}/>
        },
      }}/>
      <TabsStack.Screen name="Diet" component={DietsScreen} options={{
        headerShown: false,
        tabBarIcon(props) {
            return <Icons name="restaurant" {...props}/>
        },
      }}/>
      <TabsStack.Screen name="Profile" component={ProfileScreen} options={{
        headerShown: false,
        tabBarIcon(props) {
            return <Icons name="person" {...props}/>
        },
      }}/>
    </TabsStack.Navigator>
  )
}

export default TabsNavigator;

const Example = () => {
    return <View />;
}

const DietScreen = () => {
  return <DietScreen/>
}