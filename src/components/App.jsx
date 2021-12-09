import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick(num) {
    setState({
      ...state,
      count: count + num,
    });
  }

  return (
    <Page onClick={handleClick} count={count} />
  );
}
