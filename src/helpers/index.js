export const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
}

export const flattenRotation = (x) => {
    return (x % 360 + 360) % 360;
}

export const prettyPrintAngle = (angle) => {
    switch (angle) {
        case 0:
            return 'E';
        case 90:
            return 'S';
        case 180:
            return 'W';
        case 270:
            return 'N';
        default:
            return angle;
    }
}


export const stringifyState = (state) => {
    return state.robots.map((robot) => {
        const isLost = robot.isLost ? 'LOST': '';
        return `${robot.x} ${robot.y} ${prettyPrintAngle(robot.direction)} ${isLost}`;
    });
}
