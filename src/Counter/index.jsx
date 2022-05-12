import React, { useState } from 'react';
import MultipleIncrease from './MultipleIncrease';

function Counter() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleIncrease = (value) => {
    setState({
      count: count + value,
    });
  };

  return (
    <div>
      <button type="button" onClick={() => handleIncrease(1)}>
        Click me! (
        {count}
        )
      </button>
      <MultipleIncrease onClick={handleIncrease} />
    </div>
  );
}

export default Counter;
