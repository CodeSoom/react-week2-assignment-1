import React, { useState } from 'react';
import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
