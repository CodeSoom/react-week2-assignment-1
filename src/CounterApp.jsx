import React, { useState } from 'react';

import CounterTemplate from './CounterTemplate';

export default function CouterApp() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleCounterClick(numberOfIncrease) {
    setState({
      count: count + numberOfIncrease,
    });
  }

  return (
    <CounterTemplate count={count} onClick={handleCounterClick} />
  );
}
