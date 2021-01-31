import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function buttonClick(value = 1) {
    setState(
      {
        count: count + value
        ,
      },
    );
  }

  return (
    <Page
      count={count}
      onClick={buttonClick}
    />
  );
}
