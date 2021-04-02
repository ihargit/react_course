import 'regenerator-runtime/runtime';
import React from 'react';
import { put, takeEvery, all } from 'redux-saga/effects';

export function* getMovies() {
  yield put({ type: 'GET_MOVIES' });
}

export function* watchGetMovies() {
  yield takeEvery('USER_FETCH_REQUESTED', getMovies);
}

export default function* rootSaga() {
  yield put({ type: 'USER_FETCH_REQUESTED' });
  yield all([watchGetMovies()]);
}
