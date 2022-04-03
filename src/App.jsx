import { useState } from 'react';

import Button from './components/Button';

export default function App() {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(value);
  };

  return (
    <>
      <h2>Counter</h2>
      <Button onClick={() => handleCount(count + 1)}>
        Click me!
        (
        {count}
        )
      </Button>
      <br />
      <br />
      {[1, 2, 3, 4, 5].map((number) => (
        <Button value={number} onClick={() => handleCount(count + number)}>
          {number}
        </Button>
      ))}
    </>
  );
}
