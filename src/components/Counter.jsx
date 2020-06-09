import React, { useState } from 'react';
import Title from './Title';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (number) => {
    setCount(number);
  };

  return (
    <>
      <Title />
      <p>
        <button type="button" onClick={() => handleCounter(count + 1)}>
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button" key={i} onClick={() => handleCounter(count + i)}>
            {i}
          </button>
        ))}
      </p>
    </>
  );
};

export default Counter;
