import * as rewardActionTypes from '../actions/rewardActionTypes';
import { goalReward } from '../types/GoalTypes.js';
import { ItemEffect } from '../types/StoreTypes';

const initialRewardsState: goalReward = {
	coins: 0,
	jewels: 0
};

const rewardsReducer = (
	state: goalReward = initialRewardsState,
	action: { type: string; payload: { rewardType: string; amount: number; effect: ItemEffect } }
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
			return state;

		default:
			return state;
	}
};

export default rewardsReducer;
