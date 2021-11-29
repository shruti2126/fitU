import { combineReducers } from 'redux';
import goalReducer from './goalReducers';

const allReducers = combineReducers({
	goalReducer
});

export default allReducers;
