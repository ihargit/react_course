import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagasMiddleware from 'redux-saga';

import rootReducer from './Reducers';
import rootSaga from './Sagas';
import * as allMovies from '../../movies.json';

const initState = { movies: allMovies };

const sagaMiddleware = createSagasMiddleware();
const store = createStore(rootReducer, initState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
