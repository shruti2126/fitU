import * as actionTypes from '../actions/actionTypes.js';

const initialRewardsState = {};

const rewardsReducer = (state = initialRewardsState, action: { type: string; payload: any }) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default rewardsReducer;
