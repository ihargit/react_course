import React from 'react';
import './style.css';
import Search from '../Search';

const Header = (props) => (
  <header id="header">
    <div id="top-bar">
      <img src="" alt="netflixroulette" />
      <button>+ ADD MOVIE</button>
    </div>
    <Search />
  </header>
);

export default Header;
