import {useEffect, useState} from 'react';
import './Components/JokeItem/JokeItem.tsx';
import JokeItem from './Components/JokeItem/JokeItem.tsx';

const Joke = () => {
  const [jokes, setJokes] = useState('');
  const norrisUrl = 'https://api.chucknorris.io/jokes/random';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(norrisUrl);
      if (response.ok) {
        const data = await response.json();
        setJokes(data.value);
      }
    };
    void fetchData();
  }, []);

  const newJoke = async () => {
    const response = await fetch(norrisUrl);
    if (response.ok) {
      const data = await response.json();
      setJokes(data.value);
    }
  };
  return (
    <div>
      <h2 className={'mb-3'}>Joke Generator</h2>
      <JokeItem joke={jokes} onPress={newJoke}/>
    </div>
  );

};
export default Joke;