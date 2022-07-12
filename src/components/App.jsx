import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickNumber({number}) {
    setCount(count + number);
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
      onClickNumber={handleClickNumber}
    />
  );
}
