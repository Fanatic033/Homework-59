import React, {useState} from 'react';
import MovieInput from './Components/Movie/MovieInput/MovieInput.tsx';
import MovieLIst from './Components/Movie/MovieList/MovieLIst.tsx';
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
  return (
    <>
      <MovieInput value={MovieInp} onChange={changeMovie} onAdd={addMovie}/>
      <MovieLIst Movies={movieList} onDelete={deleteMovie}/>
    </>
  );
};

export default Movie;