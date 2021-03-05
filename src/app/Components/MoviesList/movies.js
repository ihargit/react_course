import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Movie from './movie';

const Movies = ({ data }) => (
  <div>
    {data.map((movieData) => {
      const { url, title, genre, releaseDate } = movieData;
      return (
          <Movie
            key={uuidv4()}
            url={url}
            title={title}
            genre={genre}
            releaseDate={releaseDate}
          />
      );
    })}
  </div>
);

export default Movies;
