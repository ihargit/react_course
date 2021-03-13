import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const SortBySelector = () => {
  return (
    <form action="" className="movies-sort-selector">
      <label>SORT BY</label>
      <select
        id="sortBy"
        name="sort"
      >
      <option value="releaseDate">release date</option>
      </select>
    </form>
  );
};

export default SortBySelector;
