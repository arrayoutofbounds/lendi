export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

function receivePhotos(json) {
  const photos = json;

  return {
    type: RECEIVE_PHOTOS,
    photos
  }
}

function fetchPhotosJson() {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
}

export function fetchPhotos() {
  return function(dispatch) {
    return fetchPhotosJson()
      .then(json => dispatch(receivePhotos(json)))
  }
}

