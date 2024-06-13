import React from 'react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (e: React.FormEvent) => void;
}

const MovieInput: React.FC<Props> = ({value, onChange, onAdd}) => {
  return (
    <form className={'row justify-content-center mb-5'} onSubmit={onAdd}>
      <h4 className={'mb-4'}>Add Movie</h4>
      <div className={'col-auto'}>
        <input
          type={'text'}
          value={value}
          onChange={onChange}
          placeholder={'Enter Movie'}
          className={'form-control col-auto'}
        />
      </div>
      <div className={'col-auto'}>
        <button type={'submit'} className={'btn btn-primary'}>Add</button>
      </div>
    </form>
  );
};

export default MovieInput;
