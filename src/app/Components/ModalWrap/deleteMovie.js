import React from 'react';
import { v4 as uuidV4 } from 'uuid';

export default function getDeleteMovieInput({
  movieId,
  closeModal,
  dispatch,
  actionCreators,
}) {
  return () => (
    <>
      <p>DELETE MOVIE</p>
      <p>Are you sure you want to delete this movie?</p>
      <div className="modal-buttons">
        <button
          className="button red"
          onClick={() => {
            dispatch(actionCreators.deleteMovie(movieId));
            closeModal();
          }}
        >
          CONFIRM
        </button>
      </div>
    </>
  );
}
