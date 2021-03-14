import React, { useState } from 'react';
import './style.css';
import Header from '../../Components/Header';
import MoviesList from '../../Components/MoviesList';
import Footer from '../../Components/Footer';
import * as allMovies from './movies.json';

export default function Page() {
  const defaultGenre = 'all';
  const selectors = [
    { value: 'release_date', view: 'release date' },
    { value: 'budget', view: 'budget' },
    { value: 'vote_average', view: 'vote average' },
    { value: 'vote_count', view: 'vote count' },
    { value: 'revenue', view: 'revenue' },
  ];
  const [movies, setMovies] = useState(allMovies);
  const [genreToSelect, setGenre] = useState(defaultGenre);
  const [selector, setSelector] = useState(selectors[0].value);

  return (
    <>
      <Header />
      <MoviesList
        movies={movies}
        setMovies={setMovies}
        genre={genreToSelect}
        setGenre={setGenre}
        selectors={selectors}
        selector={selector}
        setSelector={setSelector}
      />
      <Footer />
    </>
  );
}
