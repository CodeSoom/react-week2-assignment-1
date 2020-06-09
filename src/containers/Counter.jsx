import React from 'react';

import useCounter from '../hooks/useCounter';

import ClickMeButton from '../components/ClickMeButton';
import NumberButtonGroup from '../components/NumberButtonGroup';

export default function Counter() {
  const [count, incrementCount] = useCounter(0);

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
