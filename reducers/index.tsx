import { combineReducers } from 'redux';
import goalReducer from './goalReducers';
import rewardsReducer from './rewardsReducer';
import storeReducer from './StoreReducer';

const allReducers = combineReducers({
	goalReducer: goalReducer,
	rewardsReducer: rewardsReducer,
	storeReducer: storeReducer
});

export default allReducers;
