import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (value) => {
    setCount(count + value);
  };

  const handleClick = (value) => {
    updateCount(value);
  };

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
