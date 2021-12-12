import { useState } from 'react';

const useAccumulator = () => {
  const [accumulator, setAccumulator] = useState(0);

  const accumulate = (amount) => {
    setAccumulator(accumulator + amount);
  };

  return {
    accumulator,
    accumulate,
  };
};

export default useAccumulator;
