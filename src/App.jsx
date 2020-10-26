import React, { useState } from 'react';

import Page from './components/MainPage';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClickCounter() {
    setCount(count + 1);
  }

  function handleClickNumber({ number }) {
    setCount(count + number);
  }

  function handleClickClear() {
    setCount(0);
  }

  return (
    <Page
      count={count}
      onClickCounter={handleClickCounter}
      onClickNumber={handleClickNumber}
      onClickClear={handleClickClear}
    />
  );
}
