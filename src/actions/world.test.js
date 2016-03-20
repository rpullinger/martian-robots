import { expect } from 'chai';
import constants from '../constants/world';
import * as actions from './world';

describe('World actions', () => {

    it('should create a world creation action', () => {
        const expectedAction = {
            type: constants.CREATE_WORLD,
            width: 10,
            height: 20
        }

        expect(actions.createWorld(10, 20)).to.deep.equal(expectedAction);
    });

    it('should not allow a world to be wider or taller than 50', () => {
        const expectedAction = {
            type: constants.CREATE_WORLD,
            width: 50,
            height: 50
        }

        expect(actions.createWorld(150, 150)).to.deep.equal(expectedAction);
        expect(actions.createWorld(50, 50)).to.deep.equal(expectedAction);
    });

    it('should have an explore world action', () => {
        // TODO: add -> http://redux.js.org/docs/recipes/WritingTests.html#async-action-creators
    });


});
