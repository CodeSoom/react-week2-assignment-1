import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickNumber(SeletedNumber = 1) {
    setState({
      count: count + SeletedNumber,
    });
  }

  return (
    <Page
      count={count}
      handleClickNumber={handleClickNumber}
    />
  );
}
