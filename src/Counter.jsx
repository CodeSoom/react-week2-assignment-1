import React, { useState } from 'react';

import Button from './Button';

export default function Counter() {
  const [state, setState] = useState({ count: 0 });
  const steps = [1, 2, 3, 4, 5];

  const { count } = state;

  function increaseCount(step) {
    setState({
      count: count + step,
    });
  }
  return (
    <p>
      <h1>Counter</h1>

      <p>
        <Button
          value={`Click me! (${count})`}
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
