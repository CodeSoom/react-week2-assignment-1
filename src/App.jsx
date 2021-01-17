import React, { useState } from 'react';
import MainPage from './MainPage';

function App() {
  const [count, setCount] = useState({
    number: 0,
  });

  const { number } = count;

  function handleClickNumber(numeral) {
    setCount({
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
