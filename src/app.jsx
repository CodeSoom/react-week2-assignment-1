import React, { useState } from 'react';

import Counter from './Counter';

export default function App() {
  const [state, setState] = useState({ count: 0 });

  const { count } = state;

  function increaseCount(step) {
    setState({
      count: count + step,
    });
  }

  return (
    <Counter
      count={count}
      increaseCount={increaseCount}
    />
  );
}
