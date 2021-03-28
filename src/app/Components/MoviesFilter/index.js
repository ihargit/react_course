import React from 'react';
import MoviesGenres from './genres';
import SortBySelector from './sortSelector';
import { SELECTORS } from '../../Constants';

const MoviesFilter = ({
  genres,
  genre,
  setGenre,
  setSelector,
  selectors,
  selector,
}) => {
  return (
    <div className="container-padding flex">
      <MoviesGenres genres={genres} selected={genre} setGenre={setGenre} />
      <SortBySelector
        setSelector={setSelector}
        selectors={SELECTORS}
        selector={selector}
      />
    </div>
  );
};

export default MoviesFilter;
