import React, { useState } from 'react';

import CounterButton from './CounterButton';
import NumberCounterButtons from './multiCounter/NumberCounterButtons';
import Title from './Title';

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
    <div>
      <Title />
      <CounterButton count={count} onClick={() => handleCounterClick(1)} />
      <NumberCounterButtons onClick={handleCounterClick} />
    </div>
  );
}
