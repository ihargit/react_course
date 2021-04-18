import { actionTypes } from '../Actions';
const { movieFetchSucceeded, movieClosed } = actionTypes;

export default function movieReducer(state = null, { type, payload }) {
  switch (type) {
    case movieFetchSucceeded:
      return { ...state, ...payload };
    case movieClosed:
      return { ...state, ...payload };
    default:
      return state;
  }
}