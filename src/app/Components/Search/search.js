import React from 'react';
import './style.css';

const Search = (props) => (
    <form action="">
      <label for="search">FIND YOUR MOVIE</label>
      <textarea id="search" name="search" rows="1" cols="50">
        What do you want to watch?
      </textarea>
      <input type="submit" value="SEARCH" />
    </form>
);

export default Search;
