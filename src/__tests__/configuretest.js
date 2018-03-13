import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {fetchPhotos} from '../stores/photos/actions'
import { RECEIVE_PHOTOS } from '../stores/photos/actionTypes';
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

/** 
    Test is for calling async action. Only first two values are compared due to 
    the large length of the results
*/
describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates photos array when done', () => {
    const expectedActions = { type: RECEIVE_PHOTOS, photos: [{
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "http://placehold.it/600/92c952",
                "thumbnailUrl": "http://placehold.it/150/92c952"
            },
            {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "http://placehold.it/600/771796",
                "thumbnailUrl": "http://placehold.it/150/771796"
            }] };
    
    const store = mockStore({ photos: [] })

    return store.dispatch(fetchPhotos()).then((res) => {
      // return of async actions
      //console.log(res.photos.slice(0,2));
      res.photos = res.photos.slice(0,2);
      expect(res).toEqual(expectedActions)
    });

  })
})