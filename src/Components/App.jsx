import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleCounterClick() {
    setCount(count + 1);
  }

  function handleButtonClick(event) {
    const buttonNumber = parseInt(event.target.name, 10);
    setCount(count + buttonNumber);
  }

  return <Page count={count} counterClick={handleCounterClick} buttonClick={handleButtonClick} />;
}

export default App;
