import * as actionTypes from '../actions/actionTypes.js';
import { goalData, Goal } from '../types/GoalTypes';

const initialGoalState: goalData = [
	{
		title: 'Daily Steps Goal',
		data: []
	},
	{
		title: 'Daily Sleep Goal',
		data: []
	}
];

const goalReducer = (state: goalData = initialGoalState, action: { type: string; payload: Goal }): goalData => {
	switch (action.type) {
		case actionTypes.ADD_GOAL:
			const newGoal = action.payload;

			if (newGoal.goalIsSteps) state[0].data.push(newGoal);
			else state[1].data.push(newGoal);

			// api call to update the firestore with the new goal
			// console.log(newGoal);
			// console.log(state);
			return state;

		case actionTypes.DELETE_GOAL:
			// console.log(action.payload);
			const payload: Goal = action.payload;
			console.log(state);
			console.log(payload);

			if (payload.goalIsSteps) state[0].data = state[0].data.filter((goal) => goal.index != payload.index);
			else state[1].data = state[0].data.filter((goal) => goal.index != payload.index);

		default:
			return state;
	}
};

export default goalReducer;
