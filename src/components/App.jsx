import { useState } from 'react';

import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount(count + 1);
  }

  function onClickNumber(number) {
    setCount(count + number);
  }

  return (
    <Page
      count={count}
      onClickCounter={onClickCounter}
      onClickNumber={onClickNumber}
    />
  );
}
