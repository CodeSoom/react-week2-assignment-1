import React, { useState } from 'react';
import Title from './Title';
import CountDisplayButton from './CountDisplayButton';
import NumberButton from './NumberButton';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (number) => {
    setCount(number);
  };

  return (
    <>
      <Title />
      <p>
        <CountDisplayButton
          count={count}
          onClick={() => handleCounter(count + 1)}
        />
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <NumberButton
            key={i}
            number={i}
            onClick={() => handleCounter(count + i)}
          />
        ))}
      </p>
    </>
  );
};

export default Counter;
