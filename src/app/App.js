import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModalWrap from './Components/ModalWrap';

import Movie from './Pages/Movie';
import Search from './Pages/Search';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router forceRefresh="false">
        <Switch>
          <Route path="/film/:id">
            <Movie />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
      <ModalWrap />
    </ErrorBoundary>
  );
};

export default hot(module)(App);
