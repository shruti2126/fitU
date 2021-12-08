import { useSelector } from 'react-redux';
import * as rewardActionTypes from '../actions/rewardActionTypes';
<<<<<<< HEAD
import updateRewards from '../Hooks/updateRewards';
import { goalReward, Goal } from '../types/GoalTypes.js';
import { ItemEffect } from '../types/StoreTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchRewards from '../Hooks/fetchRewards';
=======
import { goalReward } from '../types/GoalTypes.js';
import { Store, StoreItem } from '../types/StoreTypes';
>>>>>>> 6082268299af9d50d32b4634f2c47bd85c303fed

const initialRewardsState: goalReward = {
	coins: 0,
	jewels: 0
};

<<<<<<< HEAD
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
=======
type increaseRewards = { rewardType: string; amount: number; inventory: any }
type decreaseRewards = StoreItem

const rewardsReducer = (
	state: goalReward = initialRewardsState,
	action: { type: string; payload: increaseRewards | decreaseRewards }
>>>>>>> 6082268299af9d50d32b4634f2c47bd85c303fed
) => {
	const payload = action.payload;
	switch (action.type) {
		case rewardActionTypes.INCREASE_REWARDS:

			// let newAmount;
			// if (!payload.effect) {
			// 	switch (payload.effect) {
			// 		case 'increaseRewards':
			// 			newAmount = payload.effect.effect(amount);
			// 	}
			// }

			console.log(payload.inventory);

			let newAmount = payload.amount;
			payload.inventory.forEach((item: StoreItem) => {
				console.log(item);
				
				if(item.isActive) {
					switch (item.effect?.type) {
						case 'increaseRewards':
							newAmount = item.effect.effect(payload.amount);
						// case 'singleUseIncreaseRewards':
					}

				}

			});

			// if (payload.effect !== undefined) {
			// 	payload.amount = payload.effect?.effect(payload.amount)
			// }

			if (payload.rewardType === 'coins') {
				const coins = state.coins + newAmount;
				state = {
					coins: coins,
					jewels: state.jewels
				};
			}
			else if (payload.rewardType === 'jewels') {
				const jewels = state.jewels + newAmount;
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

		case rewardActionTypes.DECREASE_REWARDS:
			console.log(payload);
			console.log('hi');
			
			state = {
				coins: state.coins - payload.coins,
				jewels: state.jewels - payload.jewels
			}
			return state;


		default:
			return state;
	}
};

export default rewardsReducer;
