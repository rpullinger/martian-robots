import { expect } from 'chai';
import directions from '../constants/directions';
import robots from '../constants/robots';
import reducer, { id, x, y, direction, isLost, instructions, robot } from './robots';

describe('Robot reducer', () => {

    /**
     * id
     */
    it('should set a initial id', () => {
        expect(id(undefined, {})).to.equal(null);
    });

    it('should handle setting an id', () => {

        const action = {
            type: robots.CREATE_ROBOT,
            id: 1
        }

        expect(id(10, action)).to.equal(1);
    });

    /**
     * x
     */
    it('should set a initial x position', () => {
        expect(x(undefined, {})).to.equal(0);
    });

    it('should handle setting a x position', () => {

        const action = {
            type: robots.CREATE_ROBOT,
            x: 1
        }

        expect(x(10, action)).to.equal(1);
    });

    it('should handle updating a x position', () => {

        const action = {
            type: robots.UPDATE_ROBOT,
            x: 1
        }

        expect(x(10, action)).to.equal(1);
    });

    /**
     * y
     */
    it('should set a initial y position', () => {
        expect(y(undefined, {})).to.equal(0);
    });

    it('should handle setting a y position', () => {

        const action = {
            type: robots.CREATE_ROBOT,
            y: 1
        }

        expect(y(10, action)).to.equal(1);
    });

    it('should handle updating a y position', () => {

        const action = {
            type: robots.UPDATE_ROBOT,
            y: 1
        }

        expect(y(10, action)).to.equal(1);
    });

    /**
     * direction
     */
    it('should set a initial direction', () => {
        expect(direction(undefined, {})).to.equal(directions.NORTH);
    });

    it('should handle setting a direction', () => {

        const action = {
            type: robots.CREATE_ROBOT,
            direction: 90
        }

        expect(direction(0, action)).to.equal(90);
    });

    it('should handle updating a direction', () => {

        const action = {
            type: robots.UPDATE_ROBOT,
            direction: 180
        }

        expect(direction(0, action)).to.equal(180);
    });

    /**
     * isLost
     */
    it('should set a initial is lost value', () => {
        expect(isLost(undefined, {})).to.equal(false);
    });

    it('should handle losing a robot', () => {

        const action = {
            type: robots.LOST_ROBOT,
            isLost: true
        }

        expect(isLost(false, action)).to.equal(true);
        expect(isLost(true, action)).to.equal(true);
    });

    /**
     * instructions
     */
    it('should set a initial instructions value', () => {
        expect(instructions(undefined, {})).to.deep.equal([]);
    });

    it('should handle setting instructions', () => {

        const action = {
            type: robots.CREATE_ROBOT,
            instructions: ['L', 'R']
        }

        expect(instructions(undefined, action)).to.deep.equal(['L', 'R']);
    });

    /**
     * robot
     */
    it('should create a empty robot object', () => {
        expect(robot(undefined, {})).to.deep.equal({});
    });

    it('should handle creating a single robot', () => {

        const action = {
            type: robots.CREATE_ROBOT,
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            instructions: ['F', 'L']
        }

        expect(robot(undefined, action)).to.deep.equal({
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        });
    });

    /**
     * robots
     */
    it('should create a empty robots object', () => {
        expect(reducer(undefined, {})).to.deep.equal([]);
    });

    it('should handle creating adding a robot to robots', () => {

        const action = {
            type: robots.CREATE_ROBOT,
            id: 2,
            x: 1,
            y: 1,
            direction: 90,
            instructions: ['F', 'L']
        }

        expect(reducer(undefined, action)).to.deep.equal([{
            id: 2,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }]);

        expect(reducer([{
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }], action)).to.deep.equal([{
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }, {
            id: 2,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }]);
    });

    it('should handle creating updating a robot in robots', () => {

        const action = {
            type: robots.UPDATE_ROBOT,
            id: 1,
            x: 2,
            y: 1,
            direction: 90,
            instructions: ['F', 'L']
        }

        expect(reducer([{
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }, {
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }], action)).to.deep.equal([{
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }, {
            id: 1,
            x: 2,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }]);
    });

    it('should handle loosing a robot in robots', () => {

        const action = {
            type: robots.LOST_ROBOT,
            id: 1,
        }

        expect(reducer([{
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }, {
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }], action)).to.deep.equal([{
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: false,
            instructions: ['F', 'L']
        }, {
            id: 1,
            x: 1,
            y: 1,
            direction: 90,
            isLost: true,
            instructions: ['F', 'L']
        }]);
    });

});
