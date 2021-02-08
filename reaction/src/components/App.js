import { useReducer } from 'react';
import Context from '../context';
import reducer, { initialState } from '../state/reducer';
import MessageBoard from './MessageBoard';
import PublishMessage from './PublishMessage';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h2>react</h2>
      <PublishMessage />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
