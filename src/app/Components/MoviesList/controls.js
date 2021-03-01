import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const MoviesListControls = ({genres}) => {
  const genresList = genres.map(genre => (<li key={uuidv4()} >{genre}</li>));
  return (
    <div>
      <>
        <ul className="results-filter">
          {genresList}
        </ul>
      </>
    </div>
  );
};

export default MoviesListControls;
