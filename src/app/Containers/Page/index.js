import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModalWrap from '../../Components/ModalWrap';

import Movie from '../../Pages/Movie';
import Search from '../../Pages/Search';

function Page({ movies }) {

  return (
    <>
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
    </>
  );
}

const mapState = ({ movies }) => ({ movies });
export default connect(mapState)(Page);
