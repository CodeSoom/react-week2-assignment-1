import React, { useState } from 'react';

import Button from './Button';

export default function Counter() {
  const initialState = { count: 0 };
  const [state, setState] = useState(initialState);
  const steps = [1, 2, 3, 4, 5];

  function increaseCount(step) {
    setState(({ count }) => ({
      count: count + step,
    }));
  }
  return (
    <p>
      <h1>Counter</h1>

      <p>
        <Button
          value={`Click me! (${state.count})`}
          onClick={() => increaseCount(1)}
        />
      </p>

      {steps.map((value) => (
        <Button
          value={value}
          onClick={() => increaseCount(value)}
        />
      ))}
    </p>
  );
}
