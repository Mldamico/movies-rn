import React, {useEffect} from 'react';
import {useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBResponse>('/now_playing');
    const respPopular = await movieDB.get<MovieDBResponse>('/popular');

    setMovies(respNowPlaying.data.results);
    setPopularMovies(respPopular.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {movies, popularMovies, loading};
};
