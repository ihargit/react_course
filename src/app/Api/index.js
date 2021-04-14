import * as qs from 'querystring';
import axios from 'axios';
import { DEFAULT_MOVIE_FETCH_ARGS, BASE_URL } from '../Constants';

const url = process.env.URL || BASE_URL;

const fetch = async (method, path, ...args) => {
  try {
    let queryString = `${qs.stringify(Object.assign({}, ...args))}`;
    queryString = queryString ? `?${queryString}` : '';
    return (await axios[method](`${url}/${path}${queryString}`)).data;
  } catch (error) {
    console.error(error);
  }
};

const getMovies = async (args) => {
  return await fetch('get', 'movies', DEFAULT_MOVIE_FETCH_ARGS, args);
};

const getMovie = async ({ movieId }) => {
  return await fetch('get', `movies/${movieId}`);
};

const deleteMovie = async ({ movieId }) => {
  return await fetch('delete', `movies/${movieId}`);
};

// const addMovie = async ({ movieId }) => {
//   return await fetch('delete', `movies/${movieId}`);
// };

export { getMovies, getMovie, deleteMovie };

// TODO redux for filters and sort
// TODO redux update, delete, add movies
// TODO routers for pages (404)
