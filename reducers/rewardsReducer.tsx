import * as actionTypes from '../actions/actionTypes.js';
import { goalReward } from '../types/GoalTypes.js';

const initialRewardsState: goalReward = {
	coins: 9,
	jewels: 0
};

const rewardsReducer = (
	state: goalReward = initialRewardsState,
	action: { type: string; payload: { rewardType: string; amount: number } }
) => {
	switch (action.type) {
		case actionTypes.INCREASE_REWARDS:
			const payload = action.payload;

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
