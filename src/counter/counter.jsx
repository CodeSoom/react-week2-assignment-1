import React from 'react';
import useAccumulator from '../hook/useAccumulator';
import Button from '../components/Button';

const Counter = () => {
  const { accumulate, accumulator } = useAccumulator();
  return (
    <div>
      Counter
      <div>
        <Button onClick={() => accumulate(1)}>
          Click me! &#40;
          {accumulator}
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

export default Counter;
