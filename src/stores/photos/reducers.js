import { combineReducers } from 'redux';
import { RECEIVE_PHOTOS } from './actionTypes';

function photos(state = [], action) {
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    default:
      return state;
  }
}


const rootReducer = combineReducers({ photos });

export default rootReducer;