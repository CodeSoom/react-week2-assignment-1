import React, { useState } from 'react';
import Title from './Title';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (number) => {
    setCount(number);
  };

  return (
    <>
      <Title />
      <p>
        <Button type="button" onClick={() => handleCounter(count + 1)}>
          Click me! (
          {count}
          )
        </Button>
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
