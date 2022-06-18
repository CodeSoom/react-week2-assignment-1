import { useState } from 'react';

import Title from './components/Title';
import CountButton from './components/CountButton';
import NumberButtons from './components/NumberButtons';

export default function App() {
  const [count, setCount] = useState(0);
  const COUNT_UNIT = 1;
  const KEYPAD_NUMBERS = 5;

  const countUp = (number) => {
    setCount(count + Number(number));
  };

  const handleClick = (number) => {
    countUp(number);
  };

  return (
    <div>
      <Title />
      <CountButton count={count} onClick={() => handleClick(COUNT_UNIT)} />
      <NumberButtons keypad={KEYPAD_NUMBERS} onClick={handleClick} />
    </div>
  );
}
