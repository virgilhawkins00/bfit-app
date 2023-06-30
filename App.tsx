import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer, Theme } from "@react-navigation/native"
import RootNavigator from './src/navigators/RootNavigator';
import { useMemo } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from '@gorhom/bottom-sheet/lib/typescript/contexts';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export default function App() {
  const theme: Theme = useMemo(() => ({...DefaultTheme, colors: {...DefaultTheme.colors, background: "#f5f5f5", text: "#7168D3", border: "#D9D9D9", primary: "#7168D3" }}), [])
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer theme={theme}>
        <BottomSheetModalProvider>
          <RootNavigator />
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
