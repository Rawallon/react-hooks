import React from 'react';

const MessageReactions = ({ messageReactions }) => {
  if (!messageReactions) return null;
  return messageReactions.map((reaction) => {
    const { id, emoji, username } = reaction;
    return (
      <span key={id}>
        {emoji} - {username}
      </span>
    );
  });
};

export default MessageReactions;
