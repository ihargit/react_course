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

const validate = values => {
  const errors = {};

  if (!Number(values.runtime)) {
    errors.runtime = 'Required';
  } else if (isNaN(values.runtime)) {
    errors.runtime = 'Must be a number';
  }

  return errors;
};

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
      runtime,
    },
    validate,
    onSubmit: (values) => {
      const payload = Object.assign({}, movie, mapValues(values), {
        tagline: movie.tagline || 'Tagline unknown',
      });
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
          type="number"
          value={formik.values.runtime}
          onChange={formik.handleChange}
          id="runtime"
          name="runtime"
        ></input>
        {formik.errors.runtime ? (
         <div>{formik.errors.runtime}</div>
       ) : null}
        <div className="modal-buttons">
          <button type="submit" className="button red">
            SAVE
          </button>
        </div>
      </form>
    </>
  );
}
