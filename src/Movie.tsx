import React, {useEffect, useState} from 'react';
import MovieInput from './Components/Movie/MovieInput/MovieInput.tsx';
import MovieList from './Components/Movie/MovieList/MovieList.tsx';
import {cinema} from '../types.ts';

const Movie = () => {
  const [movieList, setMovieList] = useState<cinema[]>([
    {name: 'Fallout', id: '1'}
  ]);
  const [MovieInp, setMovieInp] = useState('');
  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieInp(e.target.value);
  };
  const addMovie = (e: React.FormEvent) => {
    e.preventDefault();
    const newMovie = {
      name: MovieInp,
      id: Math.random().toString(),
    };
    setMovieList((movieList) => [...movieList, newMovie]);
    setMovieInp('');
  };
  const deleteMovie = (id: string) => {
    setMovieList((prevMovieList) => prevMovieList.filter(movie => movie.id !== id));
  };
  const editMovie = (id: string, newMovie: string) => {
    setMovieList((prevMovieList) => {
      return prevMovieList.map(movie => {
        if (movie.id === id) {
          return {
            ...movie,
            name: newMovie,
          };
        }
        return movie;
      });
    });
  };
  useEffect(() => {
    console.log('movieList changed');
  }, [movieList]);
  return (
    <>
      <MovieInput value={MovieInp} onChange={changeMovie} onAdd={addMovie}/>
      <MovieList Movies={movieList} onDelete={deleteMovie} onEdit={editMovie}/>
    </>
  );
};

export default Movie;