import React from 'react';

import ClickMeButton from './ClickMeButton';
import NumberButtonGroup from './NumberButtonGroup';

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const incrementCount = (delta = 1) => {
    setCount(count + delta);
  };

  return (
    <>
      <p>
        <ClickMeButton count={count} incrementCount={incrementCount} />
      </p>
      <p>
        <NumberButtonGroup incrementCount={incrementCount} />
      </p>
    </>
  );
}
