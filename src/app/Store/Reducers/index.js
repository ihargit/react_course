import { combineReduces } from 'react';
import * as allMovies from '../../../movies.json';

export default function rootReducer(state = allMovies, action) {
  if (action.type === 'GET_MOVIES') {
    return {...state };
  }
  return state;
}