import React, { useState } from 'react';
import Counter from './Counter';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

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
    <>
      <Counter />
      <ClickMeButton count={count} onClick={buttonClick} />
      <NumberButtons onClick={buttonClick} />
    </>
  );
}
