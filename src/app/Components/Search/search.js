import React from 'react';
import './style.css';

const Search = (props) => (
  <div id="search">
    <p>FIND YOUR MOVIE</p>
    <form action="">
      <textarea
        id="search"
        name="search"
        rows="1"
        cols="50"
        defaultValue="What do you want to watch?"
      ></textarea>
      <input type="submit" value="SEARCH" />
    </form>
  </div>
);

export default Search;
