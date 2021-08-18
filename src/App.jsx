import React, { useState } from 'react';
import Page from './components/Page';

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

  function handleClickNumber(value) {
    setState({
      count: count + value,
    });
  }

  return (
    <Page count={count} onClick={handleClick} onClickNumber={handleClickNumber} />
  );
}

export default App;
