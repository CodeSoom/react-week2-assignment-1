import React, { useState } from 'react';
import CountDisplayButton from './CountDisplayButton';
import NumberButtons from './NumberButtons';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (number) => {
    setCount(number);
  };

  return (
    <>
      <p>
        <CountDisplayButton
          count={count}
          onClick={() => handleCounter(count + 1)}
        />
      </p>
      <p>
        <NumberButtons
          onClick={(increment) => handleCounter(count + increment)}
        />
      </p>
    </>
  );
};

export default Counter;
