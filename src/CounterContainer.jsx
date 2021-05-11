import React, { useState } from 'react';

import CounterPresentational from './CounterPresentainal';

export default function CounterContainer() {
  const [state, setState] = useState({ count: 0 });

  const { count } = state;

  function increaseCount(step) {
    setState({
      count: count + step,
    });
  }
  return (
    <CounterPresentational
      count={count}
      increaseCount={increaseCount}
    />
  );
}
