import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/config';
import MainNavigator from './Routes/Navigator';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="light-content" />
			<MainNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
