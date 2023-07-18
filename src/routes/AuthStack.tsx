import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from '../screens/SignUpScreen/SignInScreen'
import { useTheme } from "styled-components/native";

const Stack = createNativeStackNavigator();

export function AuthStack() {
    const {colors} = useTheme();
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.onBackground,
          headerStyle: {
            backgroundColor: colors.backgroundSecondary,
          },
        }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    );
  }