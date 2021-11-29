import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/config';
import MainNavigator from './Routes/Navigator';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const stack = createNativeStackNavigator();

// Initialize redux store
const store = createStore(allReducers);

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StatusBar barStyle="light-content" />
				<MainNavigator />
			</NavigationContainer>
		</Provider>
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
