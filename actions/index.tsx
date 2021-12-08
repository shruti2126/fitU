import * as goalActions from './goalActionTypes.js';
import * as rewardsActions from './rewardActionTypes';
import * as storeActions from './storeActionTypes';
import * as inventoryActions from './inventoryActionTypes';
import { Goal } from '../types/GoalTypes';
import { StoreItem } from '../types/StoreTypes';

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

export const DECREASE_REWARDS = (item: StoreItem) => {
	return {
		type: rewardsActions.DECREASE_REWARDS,
		payload: item
	};
};

/**
 * Shop Actions
 */

export const BUY_ITEM = (item: StoreItem) => {
	return {
		type: storeActions.BUY_ITEM,
		payload: item
	};
};

/**
 * Inventory Actions
 */

export const ADD_ITEM = (item: StoreItem) => {
	return {
		type: inventoryActions.ADD_ITEM,
		payload: item
	};
};
