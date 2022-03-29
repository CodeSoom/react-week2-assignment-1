import { useState } from 'react';

import Title from './Title';
import Counter from './Counter';
import Button from './Button';

const numbers = [1, 2, 3, 4, 5];

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title />
      <Counter setCount={setCount}>
        Click me!
        (
        { count }
        )
      </Counter>
      <p>
        {numbers.map((number) => (
          <Button setCount={setCount}>
            {number}
          </Button>
        ))}
      </p>
    </>
  );
}
