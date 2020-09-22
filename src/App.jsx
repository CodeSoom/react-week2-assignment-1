import React, { useState } from 'react';

import Counter from './Counter';
import CounterButtons from './CounterButtons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = {
    counter: () => {
      setState({
        count: count + 1,
      });
    },
    number: (increment) => {
      setState({
        count: count + increment,
      });
    },
  };

  return (
    <div>
      <p>Count</p>
      <Counter
        count={count}
        onClick={handleClick.counter}
      />
      <CounterButtons
        onClick={handleClick.number}
      />
    </div>
  );
}
