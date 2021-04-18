import { actionTypes } from '../Actions';
const { moviesSortSelectorSet, moviesGenreSet } = actionTypes;

export default function moviesFilterReducer(state = null, { type, payload }) {
  switch (type) {
    case moviesSortSelectorSet:
      return { ...state, sortBy: payload };
    case moviesGenreSet:
      return { ...state, genre: payload, filter: [payload === 'all' ? '' : payload] };
    default:
      return state;
  }
}