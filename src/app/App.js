import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Page from './Containers/Page';
import ErrorBoundary from './Components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Page/>
      </ErrorBoundary>
    );
  }
}

export default hot(module)(App);
