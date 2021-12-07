import * as inventoryActionTypes from '../actions/inventoryActionTypes';
import { Inventory } from '../types/InventoryTypes';
import { StoreItem } from '../types/StoreTypes';

const initialInventoryState: Inventory = [];

const inventoryReducer = (
	state: Inventory = initialInventoryState,
	action: { type: string; payload: StoreItem }
): Inventory => {
	switch (action.type) {
		case inventoryActionTypes.ADD_ITEM:
			state.push(action.payload);
			return state;
	}
	return state;
};

export default inventoryReducer;
