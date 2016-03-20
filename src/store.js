import { createStore, combineReducers } from 'redux';
import world from './reducers/world';
import robots from './reducers/robots';

export default createStore(combineReducers({
    world,
    robots
}));
