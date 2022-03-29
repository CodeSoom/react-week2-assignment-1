import React, { useState } from 'react';
import numberButton from './Numberbutton';
import clickMeButton from './Clickmebutton';

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
    <>
      <p>Counter</p>
      <p>
        <clickMeButton count={count} onClick={() => handleClick(1)} />
      </p>
      {[1, 2, 3, 4, 5].map((i) => (
        <numberButton key={i} number={i} onClick={() => handleClick(i)} />
      ))}
    </>
  );
}

export default Counter;
