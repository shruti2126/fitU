import * as levelsActionType from '../actions/levelsActionTypes';
import { Goal } from '../types/GoalTypes';
import { level, levelRewards } from '../types/LevelsType';

const initialLevelsState: level = {
	currentLevel: 1,
	experienceToComplete: 5,
	levelRewards: {
		coins: 1,
		jewels: 0
	}
};

const levelsReducer = (state: level = initialLevelsState, action: { type: string; payload: any }) => {
	const payload = action.payload;
	switch (action.payload) {
		case levelsActionType.PROGRESS_LEVEL:
			const completedGoal: Goal = payload.goal;
			let expPoints: number;

			if (completedGoal.difficulty < 4) expPoints = completedGoal.difficulty;
			else expPoints = completedGoal.difficulty + 2;

			const progressedGoal: level = {
				currentLevel: state.currentLevel,
				experienceToComplete: state.experienceToComplete - expPoints,
				levelRewards: state.levelRewards
			};
			state = progressedGoal;
			return state;

		case levelsActionType.LEVEL_UP:
			const newLevel: number = state.currentLevel + 1;
			let newRewards: levelRewards;

			if (!(newLevel % 5)) {
				newRewards = {
					coins: 5,
					jewels: Math.floor(state.currentLevel / 2)
				};
			}
			else {
				newRewards = {
					coins: Math.floor(state.currentLevel / 2),
					jewels: 0
				};
			}

			const levelUP: level = {
				currentLevel: newLevel,
				experienceToComplete: state.experienceToComplete + Math.floor(state.experienceToComplete / 2),
				levelRewards: newRewards
			};
			state = levelUP;
			return state;

		default:
			return state;
	}
};

export default levelsReducer;
