import { expect } from 'chai';
import world from '../constants/world';
import reducer, { width, height } from './world';

describe('World reducer', () => {

    it('should have a width and height', () => {
        expect(reducer(undefined, {})).to.have.all.keys('width', 'height');
    });

    /**
     * WIDTH
     */
    it('should set a initial width', () => {
        expect(width(undefined, {})).to.equal(0);
    });

    it('should handle setting a width', () => {

        const action = {
            type: world.CREATE_WORLD,
            width: 20
        }

        expect(width(undefined, action)).to.equal(20);
        expect(width(10, action)).to.equal(20);
    });

    /**
     * HEIGHT
     */
    it('should set a initial height', () => {
        expect(height(undefined, {})).to.equal(0);
    });

    it('should handle setting a height', () => {

        const action = {
            type: world.CREATE_WORLD,
            height: 20
        }

        expect(height(undefined, action)).to.equal(20);
        expect(height(10, action)).to.equal(20);
    });
});
