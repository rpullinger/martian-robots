import { combineReducers } from 'redux';
import constants from '../constants/world';

export function width(state = 0, action){
    switch(action.type){
    case constants.CREATE_WORLD:
        return action.width;
    default:
        return state;
    }
}

export function height(state = 0, action){
    switch(action.type){
    case constants.CREATE_WORLD:
        return action.height;
    default:
        return state;
    }
}


export default combineReducers({
    width,
    height
});
