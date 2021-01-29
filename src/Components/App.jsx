import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleCounterClick() {
    setCount(count + 1);
  }

  function handleButtonClick(number) {
    setCount(count + number);
  }

  return (
    <Page
      count={count}
      onCounterClick={handleCounterClick}
      onButtonClick={handleButtonClick}
    />
  );
}

export default App;
