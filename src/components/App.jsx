import React, { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const buttons = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  function handleClick(addedNumber = 1) {
    setState({
      count: count + addedNumber,
    });
  }

  return (
    <div>
      <Counter
        count={count}
        buttons={buttons}
        onClick={handleClick}
      />
      <Buttons
        buttons={buttons}
        onClick={handleClick}
      />
    </div>
  );
}
