import React, { useState } from 'react';
import CounterButtons from './CounterButtons';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (number) => {
    setCount(number);
  };

  return (
    <>
      <CounterButtons
        count={count}
        onClick={handleCounter}
      />
    </>
  );
};

export default Counter;
