import React, { useState } from 'react';

import Main from './main';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickMeButton() {
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
      onClickMeButton={handleClickMeButton}
      onClickNumber={handleClickNumber}
    />
  );
}
