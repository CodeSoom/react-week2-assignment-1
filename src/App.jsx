import { useState } from 'react';

import Title from './Title';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(value = 1) {
    setCount(count+value);
    console.log(value);
    console.log(count);
  }

  return (
    <>
      <Title />
      <ClickMeButton count={count} onClick={handleClick} />
      <NumberButtons onClick={handleClick} />
    </>
  );
}
