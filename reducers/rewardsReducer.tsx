import * as rewardActionTypes from '../actions/rewardActionTypes';
import updateRewards from '../Hooks/updateRewards';
import { goalReward, Goal } from '../types/GoalTypes.js';
import { ItemEffect } from '../types/StoreTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchRewards from '../Hooks/fetchRewards';

const initialRewardsState: goalReward = {
	coins: 0,
	jewels: 0
};

const getData = async () => {
	try {
		const jsonValue = await AsyncStorage.getItem('userInfo');
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
		console.log("there was an error = ", e)
	}
}

const data = getData().then(async data => {
	if (data != null) {
		const rewards = await fetchRewards(data.email)
		console.log("REWARDS = ", rewards)
		if(rewards != undefined) {
			initialRewardsState.coins = rewards.coins
			initialRewardsState.jewels = rewards.jewels
		}
	}
	
})

const rewardsReducer = (
	state: goalReward = initialRewardsState,
	action: { type: string; payload: { rewardType: string; amount: number; effect: ItemEffect, goal: Goal } }
) => {
	switch (action.type) {
		case rewardActionTypes.INCREASE_REWARDS:
			const payload = action.payload;

			// let newAmount;
			// if (!payload.effect) {
			// 	switch (payload.effect) {
			// 		case 'increaseRewards':
			// 			newAmount = payload.effect.effect(amount);
			// 	}
			// }

			if (payload.effect !== undefined) {
				payload.amount = payload.effect?.effect(payload.amount)	
			}
			

			if (payload.rewardType === 'coins') {
				const coins = state.coins + payload.amount;
				state = {
					coins: coins,
					jewels: state.jewels
				};
			}
			else if (payload.rewardType === 'jewels') {
				const jewels = state.jewels + payload.amount;
				state = {
					coins: state.coins,
					jewels: jewels
				};
			}
			else {
				throw `Incorrect reward type: ${payload.rewardType} (must be either 'coins' or 'jewels')`;
			}
			updateRewards(state)
			return state;

		default:
			return state;
	}
};

export default rewardsReducer;
