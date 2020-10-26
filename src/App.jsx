import React, { useState } from 'react';

import Page from './components/MainPage';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(increment) {
    setCount(count + increment);
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}
