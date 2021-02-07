import React, { useState } from 'react';
import PICTURES from './data/pictures';
import { useDynamicTransition } from './hooks';

const SECONDS = 1000;

export default function Gallery() {
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition({
    delay,
    increment,
    length: PICTURES.length,
  });
  const updateDelay = (e) => {
    const delay = Number(e.target.value);
    setDelay((delay < 1 ? 2 : delay) * SECONDS);
  };
  const updateIncrement = (e) => {
    const increment = Number(e.target.value);
    setIncrement(increment < 1 ? 1 : increment);
  };
  return (
    <div className="gallery">
      <div className="galery-img">
        <img src={PICTURES[index].image} alt="gallery" />
      </div>
      <div className="multiform">
        <div>
          Delay:
          <input type="number" value={delay / SECONDS} onChange={updateDelay} />
        </div>
        <div>
          Increment:
          <input type="number" value={increment} onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}
