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
	switch (action.type) {
		case goalActionTypes.ADD_GOAL:
			const newGoal = action.payload;

			if (newGoal.goalIsSteps) state[0].data.push(newGoal);
			else state[1].data.push(newGoal);

			// api call to update the firestore with the new goal
			// console.log(newGoal);
			// console.log(state);
			return state;

		case goalActionTypes.DELETE_GOAL:
			// console.log(action.payload);
			const payload: Goal = action.payload;
			console.log(payload);

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

			if (payload.goalIsSteps) newState[0].data = state[0].data.filter((goal) => goal.index != payload.index);
			else newState[1].data = state[1].data.filter((goal) => goal.index != payload.index);

			state = newState;
			return state;

		default:
			return state;
	}
};

export default goalReducer;
