import React, { useState } from 'react';
import ClickMeButton from './components/ClickMeButton';
import NumberButtons from './components/NumberButtons';

export default function App() {
  const [counterNumber, setCounterNumber] = useState(0);

  function handlerClickButton({ number }) {
    setCounterNumber(counterNumber + number);
  }

  return (
    <div>
      <p>Counter</p>
      <ClickMeButton
        counterNumber={counterNumber}
        onClick={handlerClickButton}
        whatNumberToAdd={1}
      />
      <br />
      <NumberButtons onClick={handlerClickButton} />
    </div>
  );
}
