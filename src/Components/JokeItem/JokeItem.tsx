import React from 'react';
import JokeBtn from './jokeBtn.tsx';

interface Props {
  joke: string;
  onPress: () => void;
}

const JokeItem: React.FC<Props> = ({joke, onPress}) => {
  console.log('rend');
  return (
    <>
      <div className={'mb-3'}>
        <JokeBtn onPress={onPress}/>
      </div>
      <div>
        <strong>{joke}</strong>
      </div>
    </>
  );
};

export default JokeItem;