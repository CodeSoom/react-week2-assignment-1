import React, { useState } from 'react';
import Page from './page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleButtonClick(value) {
    setState({
      count: count + value,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
      onButtonClick={(value) => handleButtonClick(value)}
    />
  );
}
