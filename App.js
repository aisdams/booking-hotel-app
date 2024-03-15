import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import FONTS from './constants/fonts';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStacKNavigator  } from '@react-navigation/native-stack'

const Stack = createNativeStacKNavigator();

export default function App() {
  const [fontLoaded] = useFonts(FONTS);

  const onLayoutRootView = useCallback( async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded]);

  if(!fontLoaded) {
    return null;
  }

  return (
   <SafeAreaProvider onLayout={onLayoutRootView}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component="Welcome"/>
        <Stack.Screen name="Login" component="Login"/>
        <Stack.Screen name="Register" component="Register"/>
      </Stack.Navigator>
    </NavigationContainer>
   </SafeAreaProvider>
  );
}