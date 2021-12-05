import * as shopActionTypes from '../actions/storeActionTypes.js';
import { Store, StoreItem } from '../types/StoreTypes.js';

const initialStoreState: Store = [
	{
		id: 1,
		name: 'anti-procrastication dagger',
		description: 'Slice through your goals! +2 coins for each goal completed until end of the week',
		coins: 10,
		jewels: 0,
		isBought: false,
		isActive: false,
		effect: 2
	},
	{
		id: 2,
		name: 'shield',
		description: 'Slice through your goals! +2 coins for each goal completed until end of the week',
		coins: 10,
		jewels: 0,
		isBought: false,
		isActive: false,
		effect: 2
	}
];

const storeReducer = (state: Store = initialStoreState, action: { type: string; payload: StoreItem }): Store => {
	switch (action.type) {
		case shopActionTypes.BUY_ITEM:
			console.log('hi');

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
