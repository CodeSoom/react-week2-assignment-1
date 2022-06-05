import React, { useState } from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(value = 1) {
    setState({
      count: count + value,
    });
  }

  return (
    <>
      <p>Counter</p>
      <Counter count={count} onClick={handleClick} />
      <Buttons numbers={[1, 2, 3, 4, 5]} onClick={handleClick} />
    </>
  );
}
