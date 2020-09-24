import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (value) => {
    setCount(count + value);
  };

  return (
    <Page
      count={count}
      onButtonClick={updateCount}
      onButtonsClick={updateCount}
    />
  );
}

export default App;
