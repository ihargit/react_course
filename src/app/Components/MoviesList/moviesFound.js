import React from 'react';

const MoviesFound = ({ number }) => {
  const string = `${number} movie${ number === 1 ? '' : 's'} found`;
  return (
    <p>{string}</p>
  );
};

export default MoviesFound;
