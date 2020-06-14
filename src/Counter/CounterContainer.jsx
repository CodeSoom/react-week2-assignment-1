import React, { useState } from 'react';

import CounterDisplay from './CounterDisplay';
import CounterButton from './CounterButton';


export default function CounterContainer() {
  const [count, setCount] = useState(0);

  function handleClickNumberButton(number) {
    setCount(count + number);
  }

  return (
    <div>
      <CounterDisplay
        currentCount={count}
        handleClickNumberButton={handleClickNumberButton}
      />
      <CounterButton
        handleClickNumberButton={handleClickNumberButton}
      />
    </div>
  );
}
