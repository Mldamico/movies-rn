import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1f2426c0163a8296ed1b362e9086d24f',
    language: 'es-ES',
  },
});

export default movieDB;
