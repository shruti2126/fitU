import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { goalReward } from '../types/GoalTypes';

const rewardsCard = () => {
	const rewardsReducer: goalReward = useSelector((state) => state.rewardsReducer);

	return (
		<View>
			<Text>Coins: {rewardsReducer.coins}</Text>
			<Text>Jewels: {rewardsReducer.jewels}</Text>
		</View>
	);
};

export default rewardsCard;
