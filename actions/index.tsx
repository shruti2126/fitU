import * as actions from './actionTypes.js';

export const ADD_GOAL = (goals: any) => {
	// console.log("patient");
	// console.log(patient);
	return {
		type: actions.ADD_GOAL,
		payload: goals
	};
};
