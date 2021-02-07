import React from 'react';
import { useFetch } from './hooks';
export default function Stories() {
  const stories = useFetch(
    'https://news-proxy-server.appspot.com/topstories',
    [],
  );

  return (
    <fieldset className="stories">
      {stories.map((story) => {
        const { id, by, time, title, url } = story;

        return (
          <div key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
            <div>
              {by} - {new Date(time * 1000).toLocaleDateString()}
            </div>
          </div>
        );
      })}
    </fieldset>
  );
}
