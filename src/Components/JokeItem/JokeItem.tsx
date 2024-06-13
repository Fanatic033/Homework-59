import React from 'react';

interface Props {
  joke: string;
  onPress: () => void;
}

const JokeItem: React.FC<Props> = ({joke, onPress}) => {
  return (
    <>
      <div className={'mb-3'}>
        <button type={'button'} onClick={onPress} className={'btn btn-dark'}>New Joke</button>
      </div>
      <div>
        <strong>{joke}</strong>
      </div>
    </>
  );
};

export default JokeItem;