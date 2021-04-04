import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagasMiddleware from 'redux-saga';

import rootReducer from './Reducers';
import rootSaga from './Sagas';
import { SELECTORS, GENRES,  DEFAULT_MOVIE_FETCH_ARGS } from '../Constants';
import * as allMovies from '../../movies.json';

const initState = {
  movies: allMovies,
  filter: Object.assign(DEFAULT_MOVIE_FETCH_ARGS, {
    genres: GENRES,
    genre: GENRES.all,
    sortSelectors: SELECTORS,
  }),
};

const sagaMiddleware = createSagasMiddleware();
const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
