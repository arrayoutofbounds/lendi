import { RECEIVE_PHOTOS } from './actionTypes';
import fetchPhotosJson from '../../api/photosApi';

function receivePhotos(json) {
    const photos = json;
  
    return {
      type: RECEIVE_PHOTOS,
      photos
    }
  }
  
  
  
  export function fetchPhotos() {
    return function(dispatch) {
      return fetchPhotosJson()
        .then(json => dispatch(receivePhotos(json)))
    }
  }