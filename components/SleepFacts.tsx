import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SleepFacts = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sleep Facts</Text>
			<Text style={styles.item}>
				Research suggests an association between sleep restriction and negative changes in metabolism. In
				adults, sleeping four hours a night, compared with 10 hours a night, appears to increase hunger and
				appetite — in particular for calorie-dense foods high in carbohydrates. Observational studies also
				suggest a link between sleep restriction and obesity.
			</Text>
		</View>
	);
};

export default SleepFacts;

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
