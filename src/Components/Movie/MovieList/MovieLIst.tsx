import React from 'react';
import {cinema} from '../../../../types.ts';
import MovieItem from './MovieItem.tsx';

interface Props {
  Movies: cinema[];
  onDelete: (id: string) => void;
}

const MovieLIst: React.FC<Props> = ({Movies, onDelete}) => {
  return (
    <>
      <h5>To Watch List</h5>
      {Movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} onDelete={() => onDelete(movie.id)}/>
      ))}
    </>
  );
};

export default MovieLIst;