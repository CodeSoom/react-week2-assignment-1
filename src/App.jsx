import React, { useState } from 'react';

import CounterPage from './CounterPage';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <CounterPage
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
