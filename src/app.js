import { createStore, combineReducers } from 'redux';
import parseInput from './helpers/parseInput';
import { stringifyState } from './helpers';
import store from './store';

import { create, transform } from './actions/robots';
import { createWorld, explore } from './actions/world';

const input = `5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`

const config = parseInput(input);

const initialise = (store, config) => {
    store.dispatch(createWorld(config.world.width, config.world.height));
    config.robots.forEach((robot, i) => {
        store.dispatch(create(i, robot.x, robot.y, robot.direction, robot.instructions));
    });
}

initialise(store, config);
store.dispatch(explore());

const output = stringifyState(store.getState());
console.log(output);
