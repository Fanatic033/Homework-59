import React from 'react';
import {Movie} from '../../../types.ts';
import MovieItem from './MovieItem.tsx';

interface Props {
  Movies: Movie[];
}

const MovieLIst: React.FC<Props> = ({Movies}) => {
  return (
    <>
      <h5>To Watch List</h5>
      {Movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id}/>
      ))}
    </>
  );
};

export default MovieLIst;