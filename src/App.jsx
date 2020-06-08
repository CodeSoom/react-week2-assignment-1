import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  function handleClickCounter() {
    setState({
      count: state.count + 1,
    });
  }

  function handleClickNumber(i) {
    setState({
      count: state.count + i,
    });
  }

  return (
    <Page
      count={state.count}
      handleClickCounter={handleClickCounter}
      handleClickNumber={handleClickNumber}
    />
  );
}

export default App;
