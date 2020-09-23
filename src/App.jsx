import React, { useState } from 'react';

import Page from './components/Page';

function App() {
  const [state, setState] = useState({ count: 0 });

  const { count } = state;

  function handleClick(value = 1) {
    setState({ count: count + value });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

export default App;
