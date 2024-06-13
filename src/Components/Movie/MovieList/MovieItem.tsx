import React from 'react';
import {cinema} from '../../../../types.ts';
interface Props {
  movie: cinema;
  onDelete: () => void;
}


const MovieItem: React.FC<Props> = ({movie,onDelete}) => {
  return (
    <div className={'mb-2'}>
      <input value={movie.name} className={'me-3'}/>
      <button className={'btn btn-danger'} onClick={onDelete}>X</button>
    </div>
  );
};

export default MovieItem;