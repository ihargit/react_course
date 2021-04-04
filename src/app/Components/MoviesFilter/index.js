import React from 'react';
import { connect } from 'react-redux';
import MoviesGenres from './genres';
import SortBySelector from './sortSelector';
import { actionTypes } from '../../Store/Actions';
const { moviesSortSelectorSet, moviesGenreSet } = actionTypes;

const MoviesFilter = ({ genres, genre, sortBy, sortSelectors, dispatch }) => {
  const setSelector = (value) =>
    dispatch({ type: moviesSortSelectorSet, payload: value });
  const setGenre = (value) =>
    dispatch({ type: moviesGenreSet, payload: value });
  return (
    <div className="container-padding flex">
      <MoviesGenres genres={genres} selected={genre} setGenre={setGenre} />
      <SortBySelector
        setSelector={setSelector}
        selectors={sortSelectors}
        selector={sortBy}
      />
    </div>
  );
};

const mapStateToMoviesFilter = ({ filter: { genres, genre, sortBy, sortSelectors } }) => {
  return { genres, genre, sortBy, sortSelectors };
};
export default connect(mapStateToMoviesFilter)(MoviesFilter);
