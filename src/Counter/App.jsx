import { useState } from 'react';

import CounterPage from './Page';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount(count + number);
  }

  return (
    <CounterPage
      count={count}
      buttonClick={handleClick}
    />
  );
}
