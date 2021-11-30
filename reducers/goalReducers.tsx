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

			return state;

		default:
			return state;
	}
};

export default goalReducer;
