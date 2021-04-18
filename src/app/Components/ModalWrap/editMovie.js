import React from 'react';
import { useFormik } from 'formik';
import { v4 as uuidV4 } from 'uuid';

const mapValues = ({
  url,
  title,
  movieGenres,
  id,
  releaseDate,
  overview,
  runtime,
}) => ({
  poster_path: url,
  title,
  genres: movieGenres,
  id,
  release_date: releaseDate,
  overview,
  runtime,
});

export default function getEditMovieInput({
  movie,
  genres,
  closeModal,
  dispatch,
  actionCreators,
}) {
  const {
    poster_path: url,
    title,
    genres: movieGenres,
    id,
    release_date: releaseDate,
    overview,
    runtime,
  } = movie;
  const formik = useFormik({
    initialValues: {
      id,
      title,
      releaseDate,
      url,
      movieGenres,
      overview,
      runtime: runtime || '',
    },
    onSubmit: (values) => {
      const payload = Object.assign({}, movie, mapValues(values));
      alert(JSON.stringify(values, null, 2));
      dispatch(actionCreators.editMovie(payload));
      closeModal();
    },
  });
  return () => (
    <>
      <h4>EDIT MOVIE</h4>
      <form onSubmit={formik.handleSubmit}>
        <label>MOVIE ID</label>
        <p>{id}</p>
        <label>TITLE</label>
        <input
          type="text"
          name="title"
          id="title"
          lable="TITLE"
          value={formik.values.title}
          onChange={formik.handleChange}
        ></input>
        <label>RELEASE DATE</label>
        <input
          type="date"
          value={formik.values.releaseDate}
          onChange={formik.handleChange}
          id="releaseDate"
          name="releaseDate"
        ></input>
        <label>MOVIE URL</label>
        <input
          type="text"
          value={formik.values.url}
          onChange={formik.handleChange}
          id="movieUrl"
          name="movieUrl"
        ></input>
        <label>GENRE</label>
        <select
          id="genre"
          name="genre"
          value={formik.values.movieGenres}
          onChange={formik.handleChange}
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
          value={formik.values.overview}
          onChange={formik.handleChange}
          id="overview"
          name="overview"
        ></textarea>
        <label>RUNTIME</label>
        <input
          type="text"
          value={formik.values.runtime}
          onChange={formik.handleChange}
          id="runtime"
          name="runtime"
        ></input>
        <div className="modal-buttons">
          <button type="submit" className="button red">
            SAVE
          </button>
        </div>
      </form>
    </>
  );
}
