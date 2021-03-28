import React from 'react';
import Header from '../../Components/Header';
import MoviesList from '../../Components/MoviesList';
import Footer from '../../Components/Footer';

export default function Movies({
  showMovieDescription,
  moviesData,
  genres,
  moviesNumber,
  setMovies,
  genre,
  setGenre,
  selector,
  setSelector,
  changeShowMovieDescription,
  changeMovieDetails,
  movieDetails,
}) {
  return (
    <>
      <Header
        showMovieDescription={showMovieDescription}
        changeShowMovieDescription={changeShowMovieDescription}
        movieDetails={movieDetails}
      />
      <MoviesList
        moviesData={moviesData}
        genres={genres}
        moviesNumber={moviesNumber}
        setMovies={setMovies}
        genre={genre}
        setGenre={setGenre}
        selector={selector}
        setSelector={setSelector}
        changeShowMovieDescription={changeShowMovieDescription}
        changeMovieDetails={changeMovieDetails}
        movieDetails={movieDetails}
      />
      <Footer />
    </>
  );
}
