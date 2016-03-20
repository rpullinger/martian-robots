import { createStore, combineReducers } from 'redux';
import world from './reducers/world';

export default createStore(combineReducers({
    world
}));
