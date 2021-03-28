import React from 'react';
import './style.css';
import MoviesGenres from './genres';
import MoviesFound from './moviesFound';
import SortBySelector from './sortSelector';
import Movies from './movies';
import { getGenres, getMoviesToDisplayData, getMoviesToDisplay } from '../../Utils';

const MoviesList = ({
  movies,
  genre,
  setGenre,
  selector,
  setSelector,
  selectors,
  openModal,
  closeModal,
  changeModalInner,
  changeShowMovieDescription,
  changeMovieDetails,
  movieDetails
}) => {
  const moviesToDisplay = getMoviesToDisplay(movies.data, genre, selector);
  const genres = getGenres(moviesToDisplay);
  const moviesNumber = moviesToDisplay.length;
  const moviesToDisplayData = getMoviesToDisplayData(moviesToDisplay);
  return (
    <>
      <div className="container-padding flex">
        <MoviesGenres genres={genres} selected={genre} setGenre={setGenre} />
        <SortBySelector
          setSelector={setSelector}
          selectors={selectors}
          selector={selector}
        />
      </div>
      <div className="container-padding">
        <MoviesFound number={moviesNumber} />
      </div>
      <div className="container-padding flex-grow-10">
        <Movies
          data={moviesToDisplayData}
          openModal={openModal}
          closeModal={closeModal}
          changeModalInner={changeModalInner}
          changeShowMovieDescription={changeShowMovieDescription}
          changeMovieDetails={changeMovieDetails}
          movieDetails={movieDetails}
        />
      </div>
    </>
  );
};

export default MoviesList;
