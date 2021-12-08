import * as shopActionTypes from '../actions/storeActionTypes.js';
import { Store, StoreItem } from '../types/StoreTypes.js';

const initialStoreState: Store = [
	{
		id: 1,
		name: 'Short Sword',
		description: 'Slice through your goals! +2 coins for each goal completed until end of the week',
		coins: 10,
		jewels: 0,
		isBought: false,
		isActive: false,
		effect: {
			type: 'increaseRewards',
			effect: (rewardAmount: number) => rewardAmount + 2
		}
	},
	{
		id: 2,
		name: 'Anti-Procrastination Sheild',
		description:
			'This strong steel shield will help you block distractions when they approach! +5 Jewels for the next goal completed',
		coins: 5,
		jewels: 0,
		isBought: false,
		isActive: false,
		effect: {
			type: 'singleUseIncreaseRewards',
			effect: (jewels: number) => jewels + 5
		}
	}
];

const storeReducer = (
	state: Store = initialStoreState,
	action: { type: string; payload: StoreItem; rewards: any }
): Store => {
	switch (action.type) {
		case shopActionTypes.BUY_ITEM:
			const payload: StoreItem = action.payload;
			const boughtItem: StoreItem = {
				...payload,
				isBought: true
			};

			const updatedItemList: Store = state.filter((item: StoreItem) => item.id !== boughtItem.id);
			state = updatedItemList;

			return state;
	}
	return state;
};

export default storeReducer;
