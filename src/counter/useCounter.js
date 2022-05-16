import { useState } from 'react';

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = (amount = 1) => setCount((previousCount) => previousCount + amount);

  return [count, incrementCount];
};

export default useCounter;
