import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({ count: 0 });

  const { count } = state;

  function handleButtonClick(i) {
    setState(
      { ...state, count: count + i },
    );
  }
  function handleCounterClick() {
    setState(
      { ...state, count: count + 1 },
    );
  }

  return (
    <Page
      count={count}
      onButtonClick={handleButtonClick}
      onCounterClick={handleCounterClick}
    />
  );
}

export default App;
