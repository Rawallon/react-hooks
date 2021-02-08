import React from 'react';
import { useAppContext } from './hooks';

const MessageBoard = () => {
  const {
    state: { messages },
  } = useAppContext();
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id}>
          <h3>{msg.text}</h3>
          <p>{new Date(msg.timestamp).toLocaleString()}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MessageBoard;
