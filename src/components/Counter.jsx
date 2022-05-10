import React, { useState } from 'react';
import NumberButtons from './NumberButtons';
import ClickMeButton from './ClickMeButton';

function Counter() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <p>
        <ClickMeButton onClick={handleClick}>
          Click me! (
          {count}
          )
        </ClickMeButton>
      </p>
      <NumberButtons count={count} onClick={handleClick} />
    </div>
  );
}

export default Counter;
