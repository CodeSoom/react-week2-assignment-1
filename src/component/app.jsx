import React, { useState } from 'react';

import Title from './title';
import MainButton from './main-button';
import Buttons from './buttons';

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
