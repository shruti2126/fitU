import * as shopActionTypes from '../actions/storeActionTypes.js';
import { Store, StoreItem } from '../types/StoreTypes.js';

const initialStoreState: Store = [];

const shopReducer = (state: Store = initialStoreState, action: { type: string; payload: StoreItem }) => {
	switch (action.type) {
	}
};

export default shopReducer;
