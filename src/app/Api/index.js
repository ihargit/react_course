import axios from 'axios';

const url = process.env.URL || 'http://localhost:4000';

const getMovies = async () => {
  try {
    return (await axios.get(`${url}/movies`)).data;
  } catch (error) {
    console.error(error);
  }
};

export { getMovies };
