import React, { useState } from 'react';

import Page from './Page';
import { sequence } from '../utills/increaseFunction';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleIncreaseButtonClick(increase) {
    setState({
      count: increase(count),
    });
  }

  return (
    <Page
      count={count}
      numbers={sequence(5)}
      onClick={handleIncreaseButtonClick}
    />
  );
}
