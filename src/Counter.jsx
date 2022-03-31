import React, { useState } from 'react';

import ClickMeButton from './ClickMeButton';
import NumberButton from './NumberButton';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount(count + number);
  }

  return (
    <div>
      <p>Counter</p>
      <p>
        <ClickMeButton count={count} onClick={handleClick} />
      </p>
      {[1, 2, 3, 4, 5].map((i) => (
        <NumberButton key={i} number={i} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}
