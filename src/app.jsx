import React, { useState } from 'react';

import Counter from './Counter';

export default function App() {
  const [state, setState] = useState({ count: 0 });

  const { count } = state;

  function increaseCount(value) {
    setState({
      ...state,
      count: count + value,
    });
  }

  return (
    <Counter
      count={count}
      increaseCount={increaseCount}
    />
  );
}
