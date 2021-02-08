import { useEffect, useReducer } from 'react';
import Context from '../context';
import PubSub from '../pubsub';
import reducer, { initialState } from '../state/reducer';
import MessageBoard from './MessageBoard';
import PublishMessage from './PublishMessage';
import SetUsername from './SetUsername';

const pubsub = new PubSub();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: (msgObj) => {
        const { channel, message } = msgObj;
        console.log('msgObj', channel, message);
        dispatch(message);
      },
    });
  }, []);

  console.log('state', state);
  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>react</h2>
      <SetUsername />
      <PublishMessage />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
