import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StepsFacts = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Step Facts</Text>
			<Text style={styles.item}>
				Step count is the number of steps you take throughout the day.{"\n"}
				Walking at least 30 minutes a day, five days a week can reduce
				your risk for coronary heart disease by about 19 percent.
			</Text>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: 'oldlace',
		borderRadius: 10,
		paddingLeft: 15,
		marginBottom: 7,
		marginTop: 15
	},
	title: {
		color: 'black',
		fontWeight: '700',
		fontSize: 32
	},
	item: {
		backgroundColor: '#ffe4c4',
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10
	}
});


export default StepsFacts;

