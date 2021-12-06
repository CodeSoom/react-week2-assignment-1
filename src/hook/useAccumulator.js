import { useState } from 'react';

const useAccumulator = () => {
  const [accumulator, setAccumulator] = useState(0);
  const accumulate = (amount) => {
    const newAccumulator = accumulator + amount;
    setAccumulator(newAccumulator);
  };
  return {
    accumulator,
    accumulate,
  };
};

export default useAccumulator;
