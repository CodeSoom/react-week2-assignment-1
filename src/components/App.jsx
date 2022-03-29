import { useState } from 'react';

import Counter from './Counter';
import Button from './Button';

const numbers = [1, 2, 3, 4, 5];

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        Counter
      </p>
      <Counter count={count} setCount={setCount} />
      <p>
        {numbers.map((number) => (
          <Button value={number} setCount={setCount}>
            {number}
          </Button>
        ))}
      </p>
    </>
  );
}
