import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { connect } from 'react-redux';
import './style.css';
import MoviesFound from './moviesFound';
import MoviesFilter from '../MoviesFilter';
import { MODALS } from '../../Constants';
import { actionCreators } from '../../Store/Actions';
import MovieCard from '../MovieCard';

const MoviesList = ({
  moviesData,
  dispatch,
}) => {
  const deleteMovie = (id) =>
    dispatch(actionCreators.showModal({ mode: MODALS.delete, movieId: id }));
  const editMovie = (id) =>
    dispatch(actionCreators.showModal({ mode: MODALS.edit, movieId: id }));
  const showMovie = (id) => dispatch(actionCreators.showMovie({ movieId: id }));
  return (
    <>
      <MoviesFilter />
      <div className="container-padding">
        <MoviesFound number={moviesData.length} />
      </div>
      <div className="container-padding flex-grow-10">
        <div className="movies">
          {moviesData.map((movieData) => {
            return (
              <MovieCard
                key={uuidV4()}
                movieData={movieData}
                showMovie={showMovie}
                deleteMovie={deleteMovie}
                editMovie={editMovie}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapState = ({ modal, movies: { data: moviesData } }) => ({
  modal,
  moviesData,
});
export default connect(mapState)(MoviesList);
