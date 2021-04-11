import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagasMiddleware from 'redux-saga';

import rootReducer from './Reducers';
import rootSaga from './Sagas';
import {
  SELECTORS,
  GENRES,
  GENRES_ALL,
  DEFAULT_MOVIE_FETCH_ARGS,
  MODALS,
} from '../Constants';
import * as allMovies from '../../movies.json';

const initState = {
  movies: allMovies,
  filter: Object.assign(DEFAULT_MOVIE_FETCH_ARGS, {
    genres: GENRES,
    genre: GENRES_ALL,
    sortSelectors: SELECTORS,
  }),
  modal: {
    isOpen: false,
    movieId: 0,
    mode: MODALS.add,
  },
  movie: {
    isOpen: false,
    movieId: 0,
  },
};

const sagaMiddleware = createSagasMiddleware();
const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
