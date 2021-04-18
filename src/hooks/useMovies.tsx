import React, {useEffect} from 'react';
import {useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const peliculas = resp.data.results;
    setMovies(peliculas);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {movies, loading};
};
