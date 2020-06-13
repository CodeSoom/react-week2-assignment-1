import React, { useState } from 'react';

import Page from './Page';

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
    <Page
      count={count}
      handleClick={handleClick}
    />
  );
}

export default App;
