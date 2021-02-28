import React from 'react';
import './style.css';
import Search from '../Search';

const Header = (props) => (
  <header className="header">
    <img src="/images/logo.png" alt="netflixroulette" />
    <button>+ ADD MOVIE</button>
    <Search />
  </header>
);

export default Header;
