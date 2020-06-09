import React, { useState } from 'react';
import Title from './Title';
import Button from './Button';
import CountDisplayButton from './CountDisplayButton';

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
          <Button type="button" key={i} onClick={() => handleCounter(count + i)}>
            {i}
          </Button>
        ))}
      </p>
    </>
  );
};

export default Counter;
