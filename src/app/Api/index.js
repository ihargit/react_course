import * as qs from 'querystring';
import axios from 'axios';

const url = process.env.URL || 'http://localhost:4000';

const getMovies = async (args) => {
  const queryString = `${qs.stringify(...args)}`;
  try {
    return (await axios.get(`${url}/movies?${queryString}`)).data;
  } catch (error) {
    console.error(error);
  }
};

export { getMovies };
