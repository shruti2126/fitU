import * as actions from './actionTypes.js';
import { Goal } from '../types/GoalTypes';

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
