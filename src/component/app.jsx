import React, { useState } from 'react';

import Title from './Title';
import MainButton from './MainButton';
import Buttons from './Buttons';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick({ number }) {
    setCount(count + number);
  }

  return (
    <div>
      <Title />
      <MainButton
        display={count}
        onClick={handleClick}
      />
      <Buttons
        onClick={handleClick}
      />
    </div>
  );
}
