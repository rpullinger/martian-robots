import { expect } from 'chai';
import parseInput, { isValid, parseWorld, parseRobot, joinAlternate, directionStringToAngle } from './parseInput';

describe('Input parser', () => {

    it('should validate input', () => {

        // TODO: write validation
        expect(isValid('')).to.equal(true);
    });

    it('should parse world size input', () => {

        expect(parseWorld('10 10')).to.deep.equal({
            width: 10,
            height: 10
        });

        expect(parseWorld('20 10')).to.deep.equal({
            width: 20,
            height: 10
        });
    })


    it('should parse a robot', () => {
        const robot = {
            location: '1 1 E',
            instructions: 'FLLFLLR'
        }

        expect(parseRobot(robot)).to.deep.equal({
            x: 1,
            y: 1,
            direction: 0,
            instructions: ['F', 'L', 'L', 'F', 'L', 'L', 'R']
        });
    })

    it('should convert a direction to correct angle', () => {
        expect(directionStringToAngle('E')).to.equal(0);
        expect(directionStringToAngle('S')).to.equal(90);
        expect(directionStringToAngle('W')).to.equal(180);
        expect(directionStringToAngle('N')).to.equal(270);

        // Default to north
        expect(directionStringToAngle('X')).to.equal(270);
    })

    it('should parse example input', () => {

        const exampleInput = `5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`;

        const expectedOutput = {
            world: {
                width: 5,
                height: 3
            },
            robots: [
                {
                    x: 1,
                    y: 1,
                    direction: 0,
                    instructions: [ "R", "F", "R", "F", "R", "F", "R", "F"]
                },
                {
                    x: 3,
                    y: 2,
                    direction: 270,
                    instructions: ["F", "R", "R", "F", "L", "L", "F", "F", "R", "R", "F", "L", "L"]
                },
                {
                    x: 0,
                    y: 3,
                    direction: 180,
                    instructions: ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"]
                },
            ]
        }

        expect(parseInput(exampleInput)).to.deep.equal(expectedOutput);
    })

});
