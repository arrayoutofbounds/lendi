import {photos} from '../stores/photos/reducers';

/**
 * Checks that the reducer has a default state and recieves photos
 */
describe("reducer", () => {
    it("has a default state", () => {
        expect(photos(undefined, {type: "unexpected"})).toEqual([]);
    });
    it("can handle receive photos request", () => {
        expect(photos(undefined, {type: "RECEIVE_PHOTOS", photos: [{
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "http://placehold.it/600/92c952",
            "thumbnailUrl": "http://placehold.it/150/92c952"
        }]})).toEqual( [{
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "http://placehold.it/600/92c952",
            "thumbnailUrl": "http://placehold.it/150/92c952"
        }]);
    });
});