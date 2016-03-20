
export const isValid = (input) => {
    // TODO: Validate input is in correct format
    return true;
}

export const parseWorld = (input) => {

    const sizes = input.split(' ');

    return {
        width: Math.floor(sizes[0]),
        height: Math.floor(sizes[1])
    }
}

export const parseRobot = (robot) => {
    const location = robot.location.split(' ');

    return {
        x: Math.floor(location[0]),
        y: Math.floor(location[1]),
        direction: directionStringToAngle(location[2]),
        instructions: robot.instructions.split('')
    }
}

export const joinAlternate = (prev, next, i) => {
    const isEven = !(i % 2);
    if (isEven){
        prev.push({ location: next });
    } else {
        let prevObject =  prev[(i-1) / 2];
        prevObject.instructions = next;
    }
    return prev;
}

export const directionStringToAngle = (string) => {
    switch (string) {
        case 'E':
            return 0;
        case 'S':
            return 90;
        case 'W':
            return 180;
        case 'N':
        default:
            return 270;
    }
}

export default (input) => {
    try {

        if (!isValid(input)){
            throw('Input is not valid');
        }

        const lines = input.split(/\n/);

        // Get world
        const firstLine = lines.shift();
        const world = parseWorld(firstLine);

        // Grab robots
        const robots = lines.filter((line) => { return line !== '' })
            .reduce(joinAlternate, [])
            .map(parseRobot);

        return {
            world,
            robots
        };

    } catch(error) {
        console.log(error);
    }
}
