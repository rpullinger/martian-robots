import constants from '../constants/robots';
import { flattenRotation, degreesToRadians } from '../helpers';

export function create(id, x, y, direction, instructions){
    return {
        type: constants.CREATE_ROBOT,
        id,
        x,
        y,
        direction,
        instructions
    }
}

export function transform(robot, instruction, world){
    const newRobot = transformInstruction(robot, instruction);

    // Check for lost robot
    if (isRobotLost(newRobot.x, newRobot.y, world.width, world.height)){
        return {...newRobot, ...{
            type: constants.LOST_ROBOT
        }}
    }

    return {...newRobot, ...{
        type: constants.UPDATE_ROBOT,
    }}
}

export function followInstructions(id){
    return function (dispatch, getState){
        const state = getState();
        const world = state.world;
        const robot = state.robots[id];

        robot.instructions.forEach((instruction) => {
            const currentRobot = getState().robots[id];
            dispatch(transform(currentRobot, instruction, world));
        });
    }
}


// TODO: seperate this robot logic somewhere

export function isRobotLost(x, y, width, height){
    return x < 0
        || x > width
        || y < 0
        || y > height;
}

export const transformInstruction = (robot, instruction) => {

    switch(instruction) {
        case "L":
            return {...robot, ...{
                direction: flattenRotation(robot.direction - 90)
            }};
        case "R":
            return {...robot, ...{
                direction: flattenRotation(robot.direction + 90)
            }};
        case "F":
            const speed = 1;
            const xDistance = Math.round(speed * Math.cos(degreesToRadians(360 - robot.direction)));
            const yDistance = Math.round(speed * Math.sin(degreesToRadians(360 - robot.direction)));

            return {...robot, ...{
                x: robot.x + xDistance,
                y: robot.y + yDistance
            }};
        default:
            return robot;
    }
}
