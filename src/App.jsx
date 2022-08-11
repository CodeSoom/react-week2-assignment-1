import React, { useState } from 'react';
import Page from './Page';

function App() {
  const [number, setNumber] = useState({
    count: 0,
  });

  const { count } = number;

  function handleClick(value) {
    if (!value) {
      setNumber({ count: count + 1 });
      return;
    }
    setNumber({ count: count + value });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
