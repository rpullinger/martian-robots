const input = `5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`


const parseInput = (input) => {
    // TODO: Parse input into object
    return {};
}

const exploreMars = (robots) => {
    return robots.map(followInstructions);
}

const followInstructions = (robot) => {
    // TODO: follow robots instructions and update location
    return robot;
}

const config = parseInput(input);
const robots = exploreMars([]);
console.log(robots);
