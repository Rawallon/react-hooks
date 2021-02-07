import React from 'react';
import { useFetch } from './hooks';

export const Joke = () => {
  const { setup, punchline } = useFetch(
    'https://official-joke-api.appspot.com/jokes/random',
    {},
  );

  return (
    <fieldset>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </fieldset>
  );
};
