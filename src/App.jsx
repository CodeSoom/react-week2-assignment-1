import { useState } from 'react';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount((value) => value + number);
  }

  return (
    <>
      <p>Counter</p>
      <ClickMeButton count={count} onClick={handleClick} />
      <NumberButtons onClick={handleClick} />
    </>
  );
}
