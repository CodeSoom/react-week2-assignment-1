import React, { useState } from 'react';

import Counter from './Counter';
import CounterButtons from './CounterButtons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = () => {
    setState({
      count: count + 1,
    });
  };

  const handleClickNumber = (increment) => {
    setState({
      count: count + increment,
    });
  };

  return (
    <div>
      <p>Count</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <CounterButtons
        onClick={handleClickNumber}
      />
    </div>
  );
}
