import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import world from './reducers/world';
import robots from './reducers/robots';

export default createStore(combineReducers({
    world,
    robots
}), applyMiddleware(thunk));
