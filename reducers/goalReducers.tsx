import * as goalActionTypes from '../actions/goalActionTypes.js';
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
	const newState: goalData = [
		{
			title: 'Daily Steps Goal',
			data: [ ...state[0].data ]
		},
		{
			title: 'Daily Sleep Goal',
			data: [ ...state[1].data ]
		}
	];

	switch (action.type) {
		case goalActionTypes.ADD_GOAL:
			const newGoal = action.payload;

			if (newGoal.goalIsSteps) state[0].data.push(newGoal);
			else state[1].data.push(newGoal);

			console.log(state);

			return state;

		case goalActionTypes.DELETE_GOAL:
			// console.log(action.payload);
			const goalToDelete: Goal = action.payload;
			// console.log(goalToDelete);

			if (goalToDelete.goalIsSteps)
				newState[0].data = state[0].data.filter((goal) => goal.index != goalToDelete.index);
			else newState[1].data = state[1].data.filter((goal) => goal.index != goalToDelete.index);

			state = newState;
			return state;

		default:
			return state;
	}
};

export default goalReducer;
