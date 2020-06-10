import React, { useState } from 'react';

import Title from './components/Title';
import ClickMeButton from './components/ClickMeButton';
import NumberButtons from './components/NumberButtons';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = (delta = 1) => {
    setCount(count + delta);
  };

  return (
    <>
      <Title />
      <ClickMeButton count={count} incrementCount={incrementCount} />
      <NumberButtons incrementCount={incrementCount} />
    </>
  );
}
