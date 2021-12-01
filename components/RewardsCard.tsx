import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { goalReward } from '../types/GoalTypes';

const rewardsCard = () => {
	const rewardsReducer: goalReward = useSelector((state) => state.rewardsReducer);

	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>Rewards</Text>
			<Text style={styles.textBody}>Coins: {rewardsReducer.coins}</Text>
			<Text style={styles.textBody}>Jewels: {rewardsReducer.jewels}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		backgroundColor: 'oldlace',
		borderRadius: 20,
		height: 100,
		width: 350,
		margin: 10,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 5
	},
	textTitle: {
		color: '#1F283A',
		fontWeight: '700',
		fontSize: 25
		// paddingLeft: 15
	},
	textBody: {
		fontSize: 18,
		marginBottom: 5
	}
});

export default rewardsCard;
