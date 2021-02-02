/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function App() {
  const [number, setNumber] = useState(0);

  function handleClick(value) {
    setNumber(number + value);
  }
  return (
    <div>
      <p>Counter</p>
      <Counter result={number} onClick={handleClick} />
      <Buttons onClick={handleClick} />
    </div>
  );
}
