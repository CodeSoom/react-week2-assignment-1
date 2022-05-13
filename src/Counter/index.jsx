import React, { useState } from 'react';

import MultipleIncrease from './MultipleIncrease';
import SingleIncrease from './SingleIncrease';

export default function Counter() {
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
      <p>Counter</p>
      <SingleIncrease onClick={handleIncrease} count={count} />
      <MultipleIncrease onClick={handleIncrease} />
    </div>
  );
}
