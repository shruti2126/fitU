import { combineReducers } from 'redux';
import goalReducer from './goalReducers';
import rewardsReducer from './rewardsReducer';
import storeReducer from './StoreReducer';
import inventoryReducer from './inventoryReducer';

const allReducers = combineReducers({
	goalReducer: goalReducer,
	rewardsReducer: rewardsReducer,
	storeReducer: storeReducer,
	inventoryReducer: inventoryReducer
});

export default allReducers;
