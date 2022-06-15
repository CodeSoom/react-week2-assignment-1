import { useState } from 'react';

import Title from './components/Title';
import CountButton from './components/CountButton';
import NumberButtons from './components/NumberButtons';

export default function App() {
  const [count, setCount] = useState(0);
  const COUNER_BUTTON_PARAMETER = 1;
  const NUMBER_BUTTONS_PARAMETER = 5;

  const countUp = (number) => {
    setCount(count + Number(number));
  };

  const handleClick = (number) => {
    countUp(number);
  };
  return (
    <div>
      <Title />
      <CountButton increasingNumber={COUNER_BUTTON_PARAMETER} count={count} onClick={handleClick} />
      <NumberButtons increasingNumber={NUMBER_BUTTONS_PARAMETER} onClick={handleClick} />
    </div>
  );
}
