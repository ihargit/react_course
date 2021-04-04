import React from 'react';
import './style.css';
import { v4 as uuidV4 } from 'uuid';

const SortBySelector = ({ setSelector, selectors, selector }) => {
  const onChange = (e) => {
    e.preventDefault();
    setSelector(e.target.value);
  };
  return (
    <form action="sortBy" className="movies-sort-selector">
      <label>SORT BY</label>
      <select id="sortBy" value={selector} name="sort" onChange={onChange}>
        {Object.values(selectors).map((selector) => (
          <option value={selector} key={uuidV4()}>
            {selector.replace(/_/gi, ' ')}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SortBySelector;
