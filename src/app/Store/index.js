import React from 'react';
import { createStore } from 'redux';
import * as allMovies from '../../movies.json';

import rootReducer from './Reducers';

const store = createStore(rootReducer, { movies: allMovies });

export default store;
// import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import createSagasMiddleware from 'redux-saga';

// import rootReducer from './Reducers';
// import rootSaga from './Sagas';

// const sagaMiddleware = createSagasMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

// export default store;
