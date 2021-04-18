import { actionTypes } from '../Actions';
const { moviesFetchSucceeded } = actionTypes;

export default function moviesReducer(state = null, { type, payload }) {
  switch (type) {
    case moviesFetchSucceeded:
      return payload;
    default:
      return state;
  }
}