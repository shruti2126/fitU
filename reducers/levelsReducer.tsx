import { level } from '../types/LevelsType';

const initialLevelsState: level = {
	currentLevel: 1,
	experienceToComplete: 5,
	levelRewards: {
		coins: 1,
		jewels: 0
	}
};

const levelsReducer = (state: level = initialLevelsState, action: { type: string; payload: any }) => {
	switch (action.payload) {
		default:
			return state;
	}
};

export default levelsReducer;
