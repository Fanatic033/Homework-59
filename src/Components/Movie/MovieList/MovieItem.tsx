import React from 'react';
import {cinema} from '../../../../types.ts';

interface Props {
  movie: cinema;
  onDelete: (id: string) => void;
  onEdit: (id: string, newMovie: string) => void;
}


const MovieItem: React.FC<Props> = React.memo(({movie, onDelete, onEdit}) => {
    const handleDelete = () => {
      onDelete(movie.id);
    };
    const EditMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
      onEdit(movie.id, e.target.value);
    };
    return (
      <div className={'mb-2'}>
        <input value={movie.name} className={'me-3'} onChange={EditMovie}/>
        <button className={'btn btn-danger'} onClick={handleDelete}>X</button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.movie.name === nextProps.movie.name &&
      prevProps.movie.id === nextProps.movie.id
    );
  });

export default MovieItem;