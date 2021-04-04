import { combineReduces } from 'react';

export default function rootReducer(state, { type, payload }) {
  if (type === 'MOVIES_FETCH_SUCCEEDED') {
    return { ...state, ...{ movies: payload } };
  }
  return state;
}
