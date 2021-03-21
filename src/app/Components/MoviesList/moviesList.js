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
      const genreLower = genre.toLowerCase();
      if (!allGenres[genreLower]) {
        allGenres[genreLower] = true;
      }
    })
  );
  return Object.keys(allGenres).sort();
};

const getMoviesToDisplayData = (data) =>
  data.map(
    ({
      poster_path,
      title,
      genres = [],
      release_date,
      id,
      overview,
      runtime,
    }) => ({
      url: poster_path || undefined,
      title,
      genre: genres.join(',') || undefined,
      releaseDate: release_date || undefined,
      id,
      overview,
      runtime,
    })
  );

const getMoviesToDisplay = (moviesData, genre = 'all', selector) => {
  const genreLower = String(genre).toLowerCase();
  return moviesData
    .filter(
      (movie) =>
        genreLower === 'all' ||
        (movie.genres &&
          !!movie.genres.find(
            (genreAny) => genreAny.toLowerCase() === genreLower
          ))
    )
    .sort((a, b) => b[selector] - a[selector]);
};

const MoviesList = ({
  movies,
  genre,
  setGenre,
  selector,
  setSelector,
  selectors,
  genresPossible,
  openModal,
  closeModal,
  changeModalInner,
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
          genresPossible={genresPossible}
          openModal={openModal}
          closeModal={closeModal}
          changeModalInner={changeModalInner}
        />
      </div>
    </>
  );
};

export default MoviesList;
