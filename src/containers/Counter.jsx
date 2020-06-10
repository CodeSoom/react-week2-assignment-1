import React from 'react';

import useCounter from '../hooks/useCounter';

import ClickMeButton from '../components/ClickMeButton';
import NumberButtons from '../components/NumberButtons';

export default function Counter() {
  const [count, incrementCount] = useCounter(0);

  return (
    <>
      <ClickMeButton count={count} incrementCount={incrementCount} />
      <NumberButtons incrementCount={incrementCount} />
    </>
  );
}
