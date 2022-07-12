import React, { useState } from 'react';
import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(numberToBeAdded = 1) {
    setCount(count + numberToBeAdded);
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
