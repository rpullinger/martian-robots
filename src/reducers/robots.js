import constants from '../constants/robots';
import directions from '../constants/directions';

export function id(state = null, action){
    switch(action.type){
    case constants.CREATE_ROBOT:
        return action.id
    default:
        return state;
    }
}

export function x(state = 0, action){
    switch(action.type){
    case constants.CREATE_ROBOT:
    case constants.UPDATE_ROBOT:
        return action.x
    default:
        return state;
    }
}

export function y(state = 0, action){
    switch(action.type){
    case constants.CREATE_ROBOT:
    case constants.UPDATE_ROBOT:
        return action.y
    default:
        return state;
    }
}

export function direction(state = directions.NORTH, action){
    switch(action.type){
    case constants.CREATE_ROBOT:
    case constants.UPDATE_ROBOT:
        return action.direction
    default:
        return state;
    }
}

export function isLost(state = false, action){
    switch(action.type){
    case constants.LOST_ROBOT:
        return true;
    default:
        return state;
    }
}

export function instructions(state = [], action){
    switch(action.type){
    case constants.CREATE_ROBOT:
        return action.instructions
    default:
        return state;
    }
}

export function robot(state = {}, action){
    switch(action.type){
    case constants.CREATE_ROBOT:
    case constants.UPDATE_ROBOT:
    case constants.LOST_ROBOT:
        return {
            id: id(state.id, action),
            x: x(state.x, action),
            y: y(state.y, action),
            direction: direction(state.direction, action),
            isLost: isLost(state.isLost, action),
            instructions: instructions(state.instructions, action)
        }
    default:
        return state;
    }
}

export function robots(state = [], action) {
    switch(action.type){
    case constants.CREATE_ROBOT:
        return [...state, robot(undefined, action)]
    case constants.UPDATE_ROBOT:
    case constants.LOST_ROBOT:
        return [
            ...state.slice(0, action.id),
            robot(state[action.id], action),
            ...state.slice(action.id + 1)
        ]
    default:
        return state;
    }
}


export default robots;
