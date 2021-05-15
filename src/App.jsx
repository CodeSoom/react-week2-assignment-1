import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(value) {
    setCount(count + value);
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
