import React from 'react';
import { createReaction } from '../state/actions';
import { REACTION_OBJECTS } from '../state/types';
import { useAppContext } from './hooks';

const CreateReaction = ({ messageId }) => {
  const {
    state: { username },
    pubsub: { publish },
  } = useAppContext();
  const publishReaction = ({ type, emoji }) => {
    publish(createReaction({ type, emoji, username, messageId }));
  };

  return (
    <div className="createreaction">
      {REACTION_OBJECTS.map((REACTION_OBJECT) => {
        const { type, emoji } = REACTION_OBJECT;
        return (
          <span key={type} onClick={() => publishReaction({ type, emoji })}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default CreateReaction;
