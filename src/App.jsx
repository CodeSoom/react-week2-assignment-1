import React, { useState } from 'react';
import ClickMeButton from './components/ClickMeButton.jsx';
import NumberButtons from './components/NumberButtons.jsx';

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
        handlerClickButton={handlerClickButton}
      />
      <br />
      <NumberButtons handlerClickButton={handlerClickButton} />
    </div>
  );
}
