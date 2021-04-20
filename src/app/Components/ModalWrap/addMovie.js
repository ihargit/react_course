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

const validate = (values) => {
  const errors = {};

  if (!Number(values.runtime)) {
    errors.runtime = 'Required';
  } else if (isNaN(values.runtime)) {
    errors.runtime = 'Must be a number';
  }

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.url) {
    errors.url = 'Required';
  }

  if (!values.genres.length) {
    errors.genres = 'Required';
  }

  if (!values.overview) {
    errors.overview = 'Required';
  }

  if (!values.releaseDate) {
    errors.releaseDate = 'Required';
  } else if (!/^[0-9]{4,4}-[0-9]{1,2}-[0-9]{1,2}$/i.test(values.releaseDate)) { // TODO fix date check
    errors.releaseDate = 'Invalid data format';
  }

  return errors;
};

export default function getAddMovieInput({
  genres,
  closeModal,
  dispatch,
  actionCreators,
}) {
  const today = new Date();
  const formik = useFormik({
    initialValues: {
      title: '',
      releaseDate: `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`,
      url: '',
      genres: [],
      overview: '',
      runtime: '',
    },
    validate,
    onSubmit: (values) => {
      const payload = Object.assign({}, mapValues(values));
      console.log(payload);
      dispatch(actionCreators.addMovie(payload));
      closeModal();
    },
  });

  return () => (
    <>
      <h4>ADD MOVIE</h4>
      <form id="add-movie-form" onSubmit={formik.handleSubmit}>
        <label>TITLE</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
        <label>RELEASE DATE</label>
        <input
          type="date"
          id="releaseDate"
          name="releaseDate"
          value={formik.values.releaseDate}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.releaseDate ? (
         <div>{formik.errors.releaseDate}</div>
       ) : null}
        <label>MOVIE URL</label>
        <input
          type="url"
          id="url"
          name="url"
          value={formik.values.url}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.url ? (
         <div>{formik.errors.url}</div>
       ) : null}
        <label>GENRE</label>
        <select
          id="genres"
          name="genres"
          value={formik.values.genres}
          onChange={formik.handleChange}
          multiple
        >
          {genres.map((value) => (
            <option value={value} key={uuidV4()}>
              {value}
            </option>
          ))}
        </select>
        {formik.errors.genres ? (
         <div>{formik.errors.genres}</div>
       ) : null}
        <label>OVERVIEW</label>
        <textarea
          id="overview"
          name="overview"
          value={formik.values.overview}
          onChange={formik.handleChange}
        ></textarea>
        <label>RUNTIME</label>
        <input
          type="number"
          id="runtime"
          name="runtime"
          value={formik.values.runtime}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.runtime ? (
         <div>{formik.errors.runtime}</div>
       ) : null}
        <div className="modal-buttons">
          <button
            className="button"
            onClick={() => {
              document.getElementById('add-movie-form').reset();
            }}
          >
            RESET
          </button>
          <button className="button red" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}
