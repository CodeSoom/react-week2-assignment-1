import React, { useState } from 'react';

import Main from './main';

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

  function handleClickNumber(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <Main
      count={count}
      onClick={handleClick}
      onClickNumber={handleClickNumber}
    />
  );
}
