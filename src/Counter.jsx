import React from 'react';

import ClickMeButton from './ClickMeButton';
import NumberButton from './NumberButton';

export default function Counter() {
  const [number, setNumber] = React.useState(0);

  const handleClick = (increment = 1) => {
    setNumber(number + increment);
  };

  return (
    <>
      <p>
        <ClickMeButton number={number} onClick={handleClick} />
      </p>
      <p>
        <NumberButton onClick={handleClick} />
      </p>
    </>
  );
}
