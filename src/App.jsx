import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(number = 1) {
    setCount(() => count + number);
  }

  return (
    <Page count={count} onClick={handleClick} />
  );
}

export default App;
