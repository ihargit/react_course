import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
import ModalWrap from './Components/ModalWrap';
import Header from './Components/Header';
import MoviesList from './Components/MoviesList';
import Footer from './Components/Footer';

import Movie from './Pages/Movie';
import Search from './Pages/Search';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';

const NotFound = () => {
  let location = useLocation();
  return (
    <div>
      404 Sorry, nothing found for <code>{location.pathname}</code>.
    </div>
  ); // TODO make it 404 page
};

const Home = ({ children }) => (
  <>
    {children}
    <MoviesList />
    <Footer />
  </>
);

const App = () => {
  // let { path, url } = useRouteMatch();
  return (
    <ErrorBoundary>
      <Router forceRefresh="false">
        <Switch>
          
          <Movie path="/film/:id" />
          <Search path="/search" />
          <NotFound path="*" />
        </Switch>
      </Router>
      <ModalWrap />
    </ErrorBoundary>
  );
};

export default hot(module)(App);
