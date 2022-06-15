import React, { useState } from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function countClick() {
    setState({
      count: count + 1,
    });
  }

  function numberClick(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={countClick}
      />
      <Buttons onClick={numberClick} />
    </div>
  );
}
