import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickCount() {
    setState({
      count: count + 1,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClickCount}
    />
  );
}
