import * as actions from './actionTypes.js';
import { Goal, goalReward } from '../types/GoalTypes';

/**
 * Goal Actions
 */

export const ADD_GOAL = (goal: Goal) => {
	return {
		type: actions.ADD_GOAL,
		payload: goal
	};
};

export const UPDATE_GOAL = (goal: Goal) => {
	return {
		type: actions.ADD_GOAL,
		payload: goal
	};
};

export const DELETE_GOAL = (goalToRemove: Goal) => {
	return {
		type: actions.DELETE_GOAL,
		payload: goalToRemove
	};
};

/**
 * Rewards Actions
 */

export const INCREASE_REWARDS = (rewards: { rewardType: string; amount: number }) => {
	return {
		type: actions.INCREASE_REWARDS,
		payload: rewards
	};
};
