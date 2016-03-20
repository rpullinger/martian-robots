import { createStore, combineReducers } from 'redux';
import parseInput from './helpers/parseInput';
import store from './store';

import { createWorld } from './actions/world';

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

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(createWorld(config.world.width, config.world.height));


const robots = exploreMars(config.robots);
console.log(robots);
