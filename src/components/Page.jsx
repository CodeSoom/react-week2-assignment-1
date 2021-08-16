import React, { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <div>
      <p>Hello World!</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <Buttons
        onClick={handleClick}
      />
    </div>
  );
}
