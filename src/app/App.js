import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Page from './Containers/Page';

class App extends Component {
  render() {
    return <Page />;
  }
}

export default hot(module)(App);
