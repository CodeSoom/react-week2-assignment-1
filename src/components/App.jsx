import React, { useState } from 'react';
import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(event, numberToBeAdded = 1) {
    setState({
      count: count + numberToBeAdded,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
