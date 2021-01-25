import React, { useState } from 'react';

import Page from './Page/Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(value = 1) {
    if (value === 0) {
      setState({
        count: 0,
      });
      return;
    }
    setState({
      count: count + 1 * value,
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
