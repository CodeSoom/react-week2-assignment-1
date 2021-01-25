import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleDigit(value) {
    setState({
      count: count + 1 * value,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
      handleDigit={handleDigit}
    />
  );
}

export default App;
