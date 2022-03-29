import React, { useState } from 'react';
import NumberButton from './NumberButton';
import ClickMeButton from './ClickmeButton';

function Counter() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      count: (count + number),
    });
  }
  return (
    <div>
      <p>Counter</p>
      <p>
        <ClickMeButton count={count} onClick={() => handleClick(1)} />
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <NumberButton key={i} number={i} onClick={() => handleClick(i)} />
        ))}
      </p>
    </div>
  );
}

export default Counter;
