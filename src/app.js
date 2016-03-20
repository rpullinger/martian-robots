import { createStore, combineReducers } from 'redux';
import parseInput from './helpers/parseInput';

const input = `5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`


const exploreMars = (robots) => {
    return robots.map(followInstructions);
}

const followInstructions = (robot) => {
    // TODO: follow robots instructions and update location
    return robot;
}

const config = parseInput(input);
const robots = exploreMars(config.robots);
console.log(robots);
