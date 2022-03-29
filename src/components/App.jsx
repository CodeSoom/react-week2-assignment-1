import { useState } from 'react';

import Counter from './Counter';
import Button from './Button';

const numbers = [1, 2, 3, 4, 5];

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickCounter() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <>
      <p>
        Counter
      </p>
      <Counter
        count={count}
        handleClick={handleClickCounter}
      />
      <p>
        {numbers.map((number) => (
          <Button
            value={number}
            handleClick={() => handleClickNumber(number)}
          >
            {number}
          </Button>
        ))}
      </p>
    </>
  );
}
