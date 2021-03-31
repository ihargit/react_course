import React, { applyMiddleware } from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import App from './app/App.js';
import store from './app/Store';
// TODO add saga middleware - get movies from server
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
