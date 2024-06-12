import React from 'react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MovieInput: React.FC<Props> = ({value, onChange}) => {
  return (
    <>
      <h4>Add Movie</h4>
      <input
        type={'text'}
        value={value}
        onChange={onChange}
      />
      <button type={'submit'}>Add</button>
    </>
  );
};

export default MovieInput;