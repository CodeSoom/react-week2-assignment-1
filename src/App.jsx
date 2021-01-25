import React, { useState } from 'react';

import Page from './Page/Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(value = 1) {
    setState({
      count: count + 1 * (value || -count),
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
