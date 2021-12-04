import * as shopActionTypes from '../actions/storeActionTypes.js';
import { Store, StoreItem } from '../types/StoreTypes.js';

const initialStoreState: Store = [
	{
		id: new Date().getTime(),
		name: 'anti-procrastication dagger',
		description: 'Slice through your goals! +2 coins for each goal completed until end of the week',
		coins: 10,
		jewels: 0,
		isBought: false,
		effect: 2
	}
];

const shopReducer = (state: Store = initialStoreState, action: { type: string; payload: StoreItem }): Store => {
	switch (action.type) {
	}
	return state;
};

export default shopReducer;
