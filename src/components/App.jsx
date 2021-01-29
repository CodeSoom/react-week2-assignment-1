import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function addByOne() {
    setState({
      count: count + 1,
    });
  }
  function addByClickedNumber(clickedNumber) {
    setState({
      count: count + clickedNumber,
    });
  }

  return (
    <Page
      count={count}
      addByOne={addByOne}
      addByClickedNumber={addByClickedNumber}
    />
  );
}