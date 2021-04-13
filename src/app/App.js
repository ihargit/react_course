import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Page from './Containers/Page';
import ErrorBoundary from './Components/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Page />
  </ErrorBoundary>
);

export default hot(module)(App);
