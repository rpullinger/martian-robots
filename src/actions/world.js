import constants from '../constants/world';
import { followInstructions } from '../actions/robots';

const WORLD_MAX_WIDTH = 50;
const WORLD_MAX_HEIGHT = 50;

export function createWorld(width, height){
    return {
        type: constants.CREATE_WORLD,
        width: Math.min(width, WORLD_MAX_WIDTH),
        height: Math.min(height, WORLD_MAX_HEIGHT)
    }
}

export function explore(){
    return function (dispatch, getState) {
        const robots = getState().robots;
        robots.forEach((robot) => {
            dispatch(followInstructions(robot.id));
        });
    };
}
