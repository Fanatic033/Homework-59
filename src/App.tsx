import './App.css';
import MovieInput from './Components/MovieInput/MovieInput.tsx';
import React, {useState} from 'react';
import MovieLIst from './Components/MovieList/MovieLIst.tsx';
import {Movie} from '../types.ts';

const App = () => {
  const [movieList, setMovieList] = useState<Movie[]>([
    {name:'Fallout', id:'1'}
  ]);
  const [MovieInp, setMovieInp] = useState('');
  console.log(MovieInp);
  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieInp(e.target.value);
  };
  return (
    <>
      <MovieInput value={MovieInp} onChange={changeMovie}/>
      <MovieLIst Movies={movieList}/>
    </>
  );
};

export default App;
