import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SavedScreen from './screens/SavedScreen'
import BookingScreen from './screens/BookingScreen';

const stackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return(
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarLabel: "Home", headerShown: false, tabBarIcon: ({focused}) => focused ? (
                  <Entypo name="home" size={24} color="black" />
                ) : (
                  <AntDesign name="home" size={24} color="black" />
                ) }} />

                <Tab.Screen name='Saved' component={SavedScreen} options={{ tabBarLabel: "Saved", headerShown: false, tabBarIcon: ({focused}) => focused ? (
                  <AntDesign name="heart" size={24} color="black" />
                ) : (
                  <AntDesign name="hearto" size={24} color="black" />
                ) }} />

                <Tab.Screen name='Bookings' component={BookingScreen} options={{ tabBarLabel: "Bookings", headerShown: false, tabBarIcon: ({focused}) => focused ? (
                  <Entypo name="home" size={24} color="black" />
                ) : (
                  <AntDesign name="home" size={24} color="black" />
                ) }} />

                <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarLabel: "Home", headerShown: false, tabBarIcon: ({focused}) => focused ? (
                  <Entypo name="home" size={24} color="black" />
                ) : (
                  <AntDesign name="home" size={24} color="black" />
                ) }} />
            </Tab.Navigator>
        )
    }
  return (
    <View>
      <Text>stackNavigator</Text>
    </View>
  )
}

export default stackNavigator

const styles = StyleSheet.create({})