import { combineReducers } from 'redux';
import goalReducer from './goalReducers';
import rewardsReducer from './rewardsReducer';

const allReducers = combineReducers({
	goalReducer: goalReducer,
	rewardsReducer: rewardsReducer
});

export default allReducers;
