
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { initializeApp } from "firebase/app";
import firebaseConfig from './config/config';

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="Home" component={HomeScreen} />
    </stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});