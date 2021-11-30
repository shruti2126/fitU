import * as actions from './actionTypes.js';
import { Goal } from '../types/GoalTypes';

export const ADD_GOAL = (goal: Goal) => {
	return {
		type: actions.ADD_GOAL,
		payload: goal
	};
};
