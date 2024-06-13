import React from 'react';
import {Movie} from '../../../types.ts';
interface Props {
  movie: Movie;
}


const MovieItem: React.FC<Props> = ({movie}) => {
  return (
    <div>
      <p>{movie.name}</p>
    </div>
  );
};

export default MovieItem;