import 'regenerator-runtime/runtime';
import React from 'react';
import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects';
import * as Api from '../../Api';

function* fetchMovies() {
  try {
    const movies = yield call(Api.getMovies);
    yield put({ type: 'MOVIES_FETCH_SUCCEEDED', payload: movies });
  } catch(e) {
    yield put({ type: 'MOVIES_FETCH_FAILED', payload: e.message });
  }
}

export default function* rootSaga() {
  yield takeLatest("MOVIES_FETCH_REQUESTED", fetchMovies);
  yield put({ type: 'MOVIES_FETCH_REQUESTED' });
}
