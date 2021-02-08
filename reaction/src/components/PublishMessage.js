import React, { useState } from 'react';
import { newMessage } from '../state/actions';
import { useAppContext } from './hooks';

const PublishMessage = () => {
  const { dispatch } = useAppContext();

  const [text, setText] = useState('');
  const publishMessage = () => {
    dispatch(newMessage(text));
  };

  return (
    <div>
      <h3>What is happening?</h3>
      <input
        type="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && publishMessage()}
      />
      <button onClick={publishMessage}>Publish</button>
    </div>
  );
};

export default PublishMessage;
