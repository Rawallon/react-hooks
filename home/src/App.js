import { useEffect, useState } from 'react';
import Gallery from './Gallery';
import { Joke } from './Joke';
import Matrix from './Matrix';
import Stories from './Stories';
import Task from './Task';
function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  useEffect(() => {
    if (userQuery === 'matrix') {
      setShowGallery(false);
    } else {
      setShowGallery(true);
    }
  }, [userQuery]);
  const handleKeyPess = (e) => {
    if (e.key === 'Enter') searchQuery();
  };
  const changeUserQuery = (e) => {
    setUserQuery(e.target.value);
  };

  const searchQuery = () => {
    window.open(`https://www.google.com/search?q=${userQuery}`, '_blank');
  };
  return (
    <div className="App">
      <h1>Home App</h1>
      <div className="form">
        <input
          type="text"
          value={userQuery}
          onChange={changeUserQuery}
          onKeyPress={handleKeyPess}
        />
        {/* <button onClick={(e) => setShowGallery(!showGallery)}>Slide</button> */}
        <button onClick={searchQuery}>Search</button>
      </div>
      {showGallery ? <Gallery /> : <Matrix />}
      <div className="content">
        <Task />
        <Joke />
        <Stories />
      </div>
    </div>
  );
}

export default App;
