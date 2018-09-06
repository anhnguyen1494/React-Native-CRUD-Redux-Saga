import { combineReducers } from 'redux';
import movieReducers from './movieReducers';

const allReducers = combineReducers({
    movieReducers,
});
export default allReducers;
