import React  from 'react';
import Header from '../../Components/Header';
import MoviesList from '../../Components/MoviesList';
import Footer from '../../Components/Footer';

export default function Movie({
  showMovieDescription,
  moviesData,
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
        changeShowMovieDescription={changeShowMovieDescription}
        changeMovieDetails={changeMovieDetails}
        movieDetails={movieDetails}
      />
      <Footer />
    </>
  );
}
