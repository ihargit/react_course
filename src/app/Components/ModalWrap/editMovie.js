import React from 'react';
import { useFormik } from 'formik';
import { v4 as uuidV4 } from 'uuid';

export default function getEditMovieInput({
  movie: {
    poster_path: url,
    title,
    genres: movieGenres,
    id,
    release_date: releaseDate,
    overview,
    runtime,
  },
  genres,
  closeModal,
  dispatch,
  actionCreators,
}) {
  const formik = useFormik({
    initialValues: {
      title,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return () => (
    <>
      <h4>EDIT MOVIE</h4>
      <form onSubmit={formik.handleSubmit} >
        <label>MOVIE ID</label>
        <p>{id}</p>
        <label>TITLE</label>
        <input type="text" name="title" id="title" lable="TITLE"></input>
        <label>RELEASE DATE</label>
        <input
          type="date"
          defaultValue={releaseDate}
          id="releaseDate"
          name="releaseDate"
        ></input>
        <label>MOVIE URL</label>
        <input
          type="text"
          defaultValue="www.url.com"
          id="movieUrl"
          name="movieUrl"
        ></input>
        <label>GENRE</label>
        <select
          id="genre"
          name="genre"
          defaultValue={movieGenres}
          onChange={() => {}}
          multiple
        >
          {genres.map((value) => (
            <option value={value} key={uuidV4()}>
              {value}
            </option>
          ))}
        </select>
        <label>OVERVIEW</label>
        <textarea
          defaultValue={overview}
          id="overview"
          name="overview"
        ></textarea>
        <label>RUNTIME</label>
        <input
          type="text"
          defaultValue={runtime}
          id="runtime"
          name="runtime"
        ></input>
      </form>
      <div className="modal-buttons">
        <button
          className="button red"
          onClick={() => {
            dispatch(actionCreators.editMovie(id)); // TODO send something other to edit
            closeModal();
          }}
        >
          SAVE
        </button>
      </div>
    </>
  );
}
