import React from 'react';
import './style.css';
import MoviesGenres from './genres';
import MoviesFound from './moviesFound';
import SortBySelector from './sortSelector';
import Movies from './movies';

const getGenres = (moviesData) => {
  const allGenres = { all: true };
  moviesData.forEach(({ genres }) =>
    (genres || []).forEach((genre) => {
      if (!allGenres[genre]) {
        allGenres[genre] = true;
      }
    })
  );
  return Object.keys(allGenres);
};

const getMoviesToDisplayData = (data) =>
  data.map(({ poster_path, title, genres = [], release_date }) => ({
    url: poster_path || undefined,
    title,
    genre: genres.join(',') || undefined,
    releaseDate: String(new Date(release_date).getFullYear()) || undefined,
  }));

const getMoviesToDisplay = (moviesData, genre) =>
  moviesData.filter((movie) => genre === 'all' || movie.genres.includes(genre));

const MoviesList = ({ movies, genreToSelect = 'all' }) => {
  const moviesToDisplay = getMoviesToDisplay(movies.data, genreToSelect);
  const genres = getGenres(moviesToDisplay);
  const moviesNumber = moviesToDisplay.length;
  const moviesToDisplayData = getMoviesToDisplayData(moviesToDisplay);
  return (
    <>
      <div className="container-padding flex">
        <MoviesGenres genres={genres} selected={genreToSelect}/>
        <SortBySelector />
      </div>
      <div className="container-padding">
        <MoviesFound number={moviesNumber} />
        <Movies data={moviesToDisplayData} />
      </div>
    </>
  );
};

export default MoviesList;
