import { expect } from 'chai';
import constants from '../constants/robots';
import * as actions from './robots';

const robot = {
    x : 1,
    y : 1,
    direction: 0
}

const world = {
    width: 10,
    height: 10
}

describe('Robot actions', () => {

    it('should have a create robot action', () => {
        const robot = {
            id: 1,
            x: 10,
            y: 20,
            direction: 90,
            instructions: ["L", "R"]
        }

        const expectedAction = {...robot, ...{
            type: constants.CREATE_ROBOT,
        }}

        expect(actions.create(robot.id, robot.x, robot.y, robot.direction, robot.instructions)).to.deep.equal(expectedAction);
    });

    it('should update if new position is safe', () => {
        expect(actions.transform(robot, "F", world))
        .to.have.property('type')
        .and.equal(constants.UPDATE_ROBOT);
    });

    it('should lose robot if new position is off the board', () => {
        expect(actions.transform({...robot, ...{
            x: 10,
            y: 10
        }}, "F", world))
        .to.have.property('type')
        .and.equal(constants.LOST_ROBOT);
    });

    it('should know if a robot is lost', () => {
        expect(actions.isRobotLost(0, 0, 10, 10)).to.equal(false);
        expect(actions.isRobotLost(10, 10, 10, 10)).to.equal(false);
        expect(actions.isRobotLost(11, 11, 10, 10)).to.equal(true);
        expect(actions.isRobotLost(-1, -1, 10, 10)).to.equal(true);
        expect(actions.isRobotLost(-1, 5, 10, 10)).to.equal(true);
    });


    describe('Translations', () => {

        it('should rotate left with instruction "L"', () => {

            expect(actions.transformInstruction(robot, "L")).to.deep.equal({
                x: 1,
                y: 1,
                direction: 270
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 90 }}, "L")).to.deep.equal({
                x: 1,
                y: 1,
                direction: 0
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 180 }}, "L")).to.deep.equal({
                x: 1,
                y: 1,
                direction: 90
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 270 }}, "L")).to.deep.equal({
                x: 1,
                y: 1,
                direction: 180
            });
        });

        it('should rotate right with instruction "R"', () => {

            expect(actions.transformInstruction(robot, "R")).to.deep.equal({
                x: 1,
                y: 1,
                direction: 90
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 90 }}, "R")).to.deep.equal({
                x: 1,
                y: 1,
                direction: 180
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 180 }}, "R")).to.deep.equal({
                x: 1,
                y: 1,
                direction: 270
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 270 }}, "R")).to.deep.equal({
                x: 1,
                y: 1,
                direction: 0
            });
        });

        it('should move forward with instruction "F"', () => {

            expect(actions.transformInstruction(robot, "F")).to.deep.equal({
                x: 2,
                y: 1,
                direction: 0
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 90 }}, "F")).to.deep.equal({
                x: 1,
                y: 0,
                direction: 90
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 180 }}, "F")).to.deep.equal({
                x: 0,
                y: 1,
                direction: 180
            });

            expect(actions.transformInstruction({...robot, ...{ direction: 270 }}, "F")).to.deep.equal({
                x: 1,
                y: 2,
                direction: 270
            });
        });

        it('should have a follow Instructions action', () => {
            // TODO: add -> http://redux.js.org/docs/recipes/WritingTests.html#async-action-creators
        });

    });

});
