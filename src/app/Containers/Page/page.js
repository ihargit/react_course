import React, { useState } from 'react';
import './style.css';
import Header from '../../Components/Header';
import MoviesList from '../../Components/MoviesList';
import Footer from '../../Components/Footer';
import * as allMovies from './movies.json';

export default function Page() {
  const defaultGenre = 'all';
  const [movies, setMovies] = useState(allMovies);
  const [genreToSelect, setGenre] = useState(defaultGenre);

  return (
    <>
      <Header />
      <MoviesList
        movies={movies}
        setMovies={setMovies}
        genre={genreToSelect}
        setGenre={setGenre}
      />
      <Footer />
    </>
  );
}
