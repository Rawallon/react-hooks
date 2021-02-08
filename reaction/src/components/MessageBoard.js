import React from 'react';
import CreateReaction from './CreateReaction';
import { useAppContext } from './hooks';
import MessageReactions from './MessageReactions';

const MessageBoard = () => {
  const {
    state: { messages, reactionsMap },
  } = useAppContext();
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id}>
          <h3>{msg.text}</h3>
          <p>
            {new Date(msg.timestamp).toLocaleString()} - {msg.username}
          </p>
          <MessageReactions messageReactions={reactionsMap[msg.id]} />
          <CreateReaction messageId={msg.id} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MessageBoard;
