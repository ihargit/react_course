import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Movie from './movie';
import ErrorBoundary from '../ErrorBoundary';

const Movies = ({ data }) => (
  <div>
    {data.map((movieData) => {
      const { url, title, genre, releaseDate } = movieData;
      return (
        <ErrorBoundary>
          <Movie
            key={uuidv4()}
            url={url}
            title={title}
            genre={genre}
            releaseDate={releaseDate}
          />
        </ErrorBoundary>
      );
    })}
  </div>
);

export default Movies;
