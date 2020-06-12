import React, { useState } from 'react';

import Title from './Title';
import MainButton from './MainButton';
import Buttons from './Buttons';

export default function App() {
  const [count, setCount] = useState(0);

  console.log(count);

  function handleCount(number) {
    console.log('handleCount', number);
    setCount(number);
  }

  return (
    <div>
      <Title />
      <MainButton
        count={count}
        onClick={() => handleCount(count + 1)}
      />
      <Buttons
        onClick={handleCount}
      />
    </div>
  );
}
