import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      ...state,
      count: count + number,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}
