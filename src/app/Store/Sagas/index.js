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
  movieDeletionRequested,
  movieDeletionFailed,
  movieEditingRequested,
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

function* deleteMovie({ type, payload: { movieId } }) {
  try {
    yield call(Api.deleteMovie, {
      movieId,
    });
  } catch (e) {
    yield put({ type: movieDeletionFailed, payload: e.message });
  }
}

function* editMovie({ type, payload: { movieData } }) {
  try {
    yield call(Api.editMovie, {
      movieData,
    });
  } catch (e) {
    yield put({ type: movieEditionFailed, payload: e.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(moviesFetchRequested, fetchMovies);
  yield takeLatest(movieFetchRequested, fetchMovie);
  yield takeLatest(moviesGenreSet, fetchMovies);
  yield takeLatest(moviesSortSelectorSet, fetchMovies);
  yield takeLatest(movieDeletionRequested, deleteMovie);
  yield takeLatest(movieEditingRequested, editMovie);
  yield put({ type: moviesFetchRequested });
}
