import 'regenerator-runtime/runtime';
import React from 'react';
import {
  put,
  takeEvery,
  all,
  call,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as Api from '../../Api';
import { actionTypes } from '../Actions';
const {
  moviesFetchSucceeded,
  moviesFetchFailed,
  moviesFetchRequested,
  movieFetchSucceeded,
  movieFetchFailed,
  movieFetchRequested,
  moviesGenreSet,
  moviesSortSelectorSet,
} = actionTypes;

function* fetchMovies({ type, payload }) {
  try {
    const { sortBy, sortOrder, filter, limit, offset } = yield select(
      ({ filter }) => filter
    );
    const movies = yield call(Api.getMovies, {
      sortBy,
      sortOrder,
      filter,
      limit,
      offset,
    });
    yield put({ type: moviesFetchSucceeded, payload: movies });
  } catch (e) {
    yield put({ type: moviesFetchFailed, payload: e.message });
  }
}

function* fetchMovie({ type, payload: { movieId } }) {
  try {
    const details = yield call(Api.getMovie, {
      movieId,
    });
    yield put({
      type: movieFetchSucceeded,
      payload: { details, movieId, isOpen: true },
    });
  } catch (e) {
    yield put({ type: movieFetchFailed, payload: e.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(moviesFetchRequested, fetchMovies);
  yield takeLatest(movieFetchRequested, fetchMovie);
  yield takeLatest(moviesGenreSet, fetchMovies);
  yield takeLatest(moviesSortSelectorSet, fetchMovies);
  yield put({ type: moviesFetchRequested });
}
