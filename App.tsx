import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppleHealthKit, {HealthValue,HealthKitPermissions} from 'react-native-health'

import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/config';
import MainNavigator from './Routes/Navigator';

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/* Permission options */
const permissions = { permissions: {
	read: [AppleHealthKit.Constants.Permissions.HeartRate],
	write: [AppleHealthKit.Constants.Permissions.Steps],
},
} as HealthKitPermissions
  
  AppleHealthKit.initHealthKit(permissions, (error: string) => {
	/* Called after we receive a response from the system */
  
	if (error) {
	  console.log('[ERROR] Cannot grant permissions!')
	}
  
	/* Can now read or write to HealthKit */
  
	const options = {
	  startDate: new Date(2020, 1, 1).toISOString(),
	}
  
	AppleHealthKit.getHeartRateSamples(
	  options,
	  (callbackError: string, results: HealthValue[]) => {
		/* Samples are now collected from HealthKit */
	  },
	)
  })

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