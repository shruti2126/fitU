import * as goalActions from './goalActionTypes.js';
import * as rewardsActions from './rewardActionTypes';
import { Goal, goalReward } from '../types/GoalTypes';

/**
 * Goal Actions
 */

export const ADD_GOAL = (goal: Goal) => {
	return {
		type: goalActions.ADD_GOAL,
		payload: goal
	};
};

export const UPDATE_GOAL = (goal: Goal) => {
	return {
		type: goalActions.ADD_GOAL,
		payload: goal
	};
};

// export const UPDATE_GOAL = (goalToUpdate: Goal) => {
// 	return {
// 		type: goalActions.UPDATE_GOAL,
// 		payload: goalToUpdate
// 	};
// };

export const DELETE_GOAL = (goalToRemove: Goal) => {
	return {
		type: goalActions.DELETE_GOAL,
		payload: goalToRemove
	};
};

/**
 * Rewards Actions
 */

export const INCREASE_REWARDS = (rewards: { rewardType: string; amount: number }) => {
	return {
		type: rewardsActions.INCREASE_REWARDS,
		payload: rewards
	};
};
