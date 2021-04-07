import React from 'react';
import { v4 as uuidV4 } from 'uuid';

export default function getDeleteMovieInput({ id, closeModal }) {
  return () => (
    <>
      <p>DELETE MOVIE</p>
      <p>Are you sure you want to delete this movie?</p>
      <div className="modal-buttons">
        <button
          className="button red"
          onClick={(id) => {
            closeModal(); // TODO implement movie deletion
          }}
        >
          CONFIRM
        </button>
      </div>
    </>
  );
}
