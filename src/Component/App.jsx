import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({ count: 0 });

  const { count } = state;

  function handleClickButton() {
    setState({ count: count + 1 });
  }

  function handleClickNumber(number) {
    setState({ count: count + number });
  }

  return (
    <Page
      count={count}
      handleClickButton={handleClickButton}
      handleClickNumber={handleClickNumber}
    />
  );
}
