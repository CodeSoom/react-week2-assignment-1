import React from 'react';

import CounterContainerView from './CounterContainerView';
import useCounter from './useCounter';

export default function CounterContainer() {
  const [count, setCount] = useCounter(0);
  const countNumbers = [1, 2, 3, 4, 5];

  const onCounter = (value) => {
    setCount(value);
  };
  return (<CounterContainerView count={count} countNumbers={countNumbers} onCounter={onCounter} />);
}
