import * as qs from 'querystring';
import axios from 'axios';
import { DEFAULT_MOVIE_FETCH_ARGS, BASE_URL } from '../Constants';

const url = process.env.URL || BASE_URL;

const fetch = async (path, ...args) => {
  try {
    const queryString = `${qs.stringify(Object.assign({}, ...args))}`;
    return (await axios.get(`${url}/${path}?${queryString}`)).data;
  } catch (error) {
    console.error(error);
  }
};

const getMovies = async (args) => {
  return await fetch('movies', DEFAULT_MOVIE_FETCH_ARGS, args);
};

export { getMovies };
