import 'regenerator-runtime/runtime';
import React from 'react';
import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects';
import * as Api from '../../Api';
import { actionTypes } from '../Actions';
const {
  moviesFetchSucceeded,
  moviesFetchFailed,
  moviesFetchRequested,
} = actionTypes;

function* fetchMovies(args = {}) {
  try {
    const movies = yield call(Api.getMovies, [args]);
    yield put({ type: moviesFetchSucceeded, payload: movies });
  } catch (e) {
    yield put({ type: moviesFetchFailed, payload: e.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(moviesFetchRequested, fetchMovies);
  yield put({ type: moviesFetchRequested });
}
