import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import SleepCard from '../components/SleepCard';
import SleepDataCard from '../components/SleepDataCard';
import SleepFacts from '../components/SleepFacts';
// import AnimatedBar from "react-native-animated-bar"

const Sleep = () => {
	return (
		<ImageBackground source={require('../Better_sleep.png')} style={styles.image}>
			<View style={styles.container}>
				{/* <AnimatedBar 
				    progress={30}
					height={50}
					borderColor="#DDD"
					fillColor="tomato"
					barColor="red"
					borderRadius={5}/> */}
				<SleepDataCard />
				<SleepCard />
				<SleepFacts />
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {},
	image: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		width: '100%',
		height: '100%'
		//blurRadius: 50
	}
});
export default Sleep;
