import * as qs from 'querystring';
import axios from 'axios';
import { DEFAULT_MOVIE_FETCH_ARGS, BASE_URL } from '../Constants';

const url = process.env.URL || BASE_URL;

const fetch = async (method, path, args, payload) => {
  try {
    let queryString = args ? `${qs.stringify(args)}` : '';
    queryString = queryString ? `?${queryString}` : '';
    return (await axios[method](`${url}/${path}${queryString}`)).data;
  } catch (error) {
    console.error(error);
  }
};

const getMovies = async (args) => {
  return await fetch(
    'get',
    'movies',
    Object.assign({}, DEFAULT_MOVIE_FETCH_ARGS, args)
  );
};

const getMovie = async ({ movieId }) => {
  return await fetch('get', `movies/${movieId}`);
};

const deleteMovie = async ({ movieId }) => {
  console.log(movieId);
  return await fetch('delete', `movies/${movieId}`);
};

const editMovie = async ({ movieData }) => {
  return await fetch('put', `movies`, null, movieData);
};

export { getMovies, getMovie, deleteMovie, editMovie };

// TODO redux update, delete, add movies
// TODO routers for pages (404)
// TODO fix BAD request on PUT movie
