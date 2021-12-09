import { combineReducers } from 'redux';
import goalReducer from './goalReducer';
import rewardsReducer from './rewardsReducer';
import storeReducer from './StoreReducer';
import inventoryReducer from './inventoryReducer';
import levelsReducer from './levelsReducer';

const allReducers = combineReducers({
	goalReducer: goalReducer,
	rewardsReducer: rewardsReducer,
	storeReducer: storeReducer,
	inventoryReducer: inventoryReducer,
	levelsReducer: levelsReducer
});

export default allReducers;
