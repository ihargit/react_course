import React from "react";
import "./style.css";
import { v4 as uuidv4 } from 'uuid';

function MoviesList({ movies }) {
  return (
    <>
      {
        movies.data.map(({ title }) => <p key={uuidv4()}>Title: {title}</p>)
      }
    </>
    );
}

export default MoviesList;