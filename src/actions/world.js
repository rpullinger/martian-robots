import constants from '../constants/world';

const WORLD_MAX_WIDTH = 50;
const WORLD_MAX_HEIGHT = 50;

export function createWorld(width, height){

    return {
        type: constants.CREATE_WORLD,
        width: Math.min(width, WORLD_MAX_WIDTH),
        height: Math.min(height, WORLD_MAX_HEIGHT)
    }
}
