import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer, Theme } from "@react-navigation/native"
import RootNavigator from './src/navigators/RootNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useMemo } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from '@gorhom/bottom-sheet/lib/typescript/contexts';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import { SignInScreen } from './src/screens/SignUpScreen/SignInScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  const theme: Theme = useMemo(() => ({...DefaultTheme, colors: {...DefaultTheme.colors, background: "#f5f5f5", text: "#7168D3", border: "#D9D9D9", primary: "#7168D3" }}), [])
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer theme={theme}>
        <BottomSheetModalProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={SignInScreen}/>
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
            <Stack.Screen name='Home' component={RootNavigator}/>
            </Stack.Navigator>
        </BottomSheetModalProvider>
        
        <StatusBar style="dark" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


