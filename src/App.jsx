import React, { useState } from 'react';
import MainPage from './MainPage';

function App() {
  const [state, setState] = useState({
    number: 0,
  });

  const { number } = state;

  function handleClickNumber(numeral) {
    setState({
      number: number + numeral,
    });
  }

  return (
    <MainPage
      number={number}
      onClick={handleClickNumber}
    />
  );
}

export default App;
