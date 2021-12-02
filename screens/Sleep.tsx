import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import SleepCard from '../components/SleepCard';

const Sleep = () => {
	return (
		<ImageBackground source={require('../Better_sleep.png')} style={styles.image}>
			<View style={styles.container}>
				<SleepCard />
			</View>
		</ImageBackground >
	);
};

const styles = StyleSheet.create({
	container : {
		 
	}, 
	image: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		width: '100%',
		height: '100%'
		//blurRadius: 50
	}
})
export default Sleep;
