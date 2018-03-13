import {photos} from '../stores/photos/reducers';

/**
 * Checks that the reducer has a default state
 */
describe("reducer", () => {
    it("has a default state", () => {
        expect(photos(undefined, {type: "unexpected"})).toEqual([]);
    });
});