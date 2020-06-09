import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleButtonClick(i) {
    setState({
      count: count + i,
    });
  }

  return (
    <Page
      count={count}
      handleButtonClick={handleButtonClick}
    />
  );
}

export default App;
