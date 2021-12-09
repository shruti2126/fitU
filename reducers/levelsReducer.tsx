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

	switch (action.type) {
		case levelsActionType.PROGRESS_LEVEL:
			console.log(action);
			// const completedGoal: Goal = payload.goal;
			let expPoints: number;

			if (payload.difficulty < 4) expPoints = payload.difficulty;
			else expPoints = payload.difficulty + 2;

			const progressedGoal: level = {
				currentLevel: state.currentLevel,
				experienceToComplete: state.experienceToComplete - expPoints,
				levelRewards: state.levelRewards
			};
			state = progressedGoal;
			return state;

		case levelsActionType.LEVEL_UP:
			console.log(state);

			if (state.experienceToComplete > 0) return state;

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
				experienceToComplete: state.currentLevel * 2,
				levelRewards: newRewards
			};
			state = levelUP;
			return state;

		default:
			return state;
	}
};

export default levelsReducer;
