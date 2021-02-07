import { useEffect, useState } from 'react';

export const useFetch = (url, initVal) => {
  const [result, setResult] = useState(initVal);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setResult(json));
  }, [url]);
  return result;
};

export const useDynamicTransition = ({ increment, delay, length }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + increment) % length;
      });
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, increment, length]);

  return index;
};
