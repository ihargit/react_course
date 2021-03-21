import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const SortBySelector = ({ setSelector, selectors, selector }) => {
  const onChange = (e) => {
    e.preventDefault();
    setSelector(e.target.value);
  };
  return (
    <form action="sortBy" className="movies-sort-selector">
      <label>SORT BY</label>
      <select id="sortBy" value={selector} name="sort" onChange={onChange}>
        {selectors.map(({ value, view }) => (
          <option value={value} key={uuidv4()}>
            {view}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SortBySelector;
