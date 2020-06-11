import React, { useState } from 'react';
import Page from './page';

function App() {
  const [state, setState] = useState(
    { count: 0 },
  );

  const { count } = state;

  function handleClickNumber(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <Page
      count={count}
      handleClickNumber={handleClickNumber}
    />
  );
}

export default App;
