import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModalWrap from '../../Components/ModalWrap';

import Movie from '../../Pages/Movie';
import Search from '../../Pages/Search';
import { DEFAULT_MOVIE_DETAILS } from '../../Constants';

function Page({ movies }) {

  const moviesProps = {
  };

  return (
    <>
      <Router forceRefresh="false">
        <Switch>
          <Route path="/film/:id">
            <Movie {...moviesProps} />
          </Route>
          <Route path="/search">
            <Search {...moviesProps} />
          </Route>
        </Switch>
      </Router>
      <ModalWrap />
    </>
  );
}

const mapState = ({ movies }) => ({ movies });
export default connect(mapState)(Page);
