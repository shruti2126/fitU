import * as actionTypes from '../actions/actionTypes.js';

const goalReducer = (state = [], action: { type: string }) => {
	switch (action.type) {
		case actionTypes.ADD_GOAL:
			console.log('goal added (temp)');

			return '';

		default:
			return state;
	}
};

export default goalReducer;
