import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Movie from './movie';

const Movies = ({ data }) => (
  <div>
    {data.map((movieData) => <Movie key={uuidv4()} movieData={movieData} />)}
  </div>
);

export default Movies;
