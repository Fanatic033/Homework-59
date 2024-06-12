import './App.css';
import MovieInput from './Components/MovieInput/MovieInput.tsx';
import React, {useState} from 'react';

const App = () => {
  const [MovieInp, setMovieInp] = useState('');
  console.log(MovieInp);
  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieInp(e.target.value);
  };
  return (
    <>
      <MovieInput value={MovieInp} onChange={changeMovie}/>
    </>
  );
};

export default App;
