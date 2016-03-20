import constants from '../constants/robots';

export function scents(state = [], action){
    switch(action.type){
    case constants.LOST_ROBOT:
        return [...state, {
            x: action.x,
            y: action.y,
            direction: action.direction
        }]
    default:
        return state;
    }
}

export default scents;
