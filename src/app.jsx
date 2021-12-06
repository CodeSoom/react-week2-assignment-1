import React, { useState } from 'react';
import Button from './components/Button';

const App = () => {
  const [accumulator, setAccumulator] = useState(0);
  const accumulate = (amount) => {
    const newAccumulator = accumulator + amount;
    setAccumulator(newAccumulator);
  };

  return (
    <div>
      Counter
      <div>
        <Button onClick={() => accumulate(1)}>
          Click Me! &#40;
          { accumulator }
          &#41;
        </Button>
      </div>
      <br />
      <div>
        {[1, 2, 3, 4, 5].map((number) => (
          <Button onClick={() => accumulate(number)}>{number}</Button>
        ))}
      </div>
    </div>
  );
};

export default App;
