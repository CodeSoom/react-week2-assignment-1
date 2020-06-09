import { useState } from 'react';

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const incrementCount = (delta = 1) => {
    setCount(count + delta);
  };

  return [count, incrementCount];
}
