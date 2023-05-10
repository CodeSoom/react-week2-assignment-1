import React from 'react';
import { useState } from 'react';
import ClickMe from './components/ClickMe.jsx';
import Button from './components/Button.jsx';

export default function App() {
  const [counterNumber, setCounterNumber] = useState(0);

  function handlerClickButton({ number }) {
    setCounterNumber(counterNumber + number);
  }

  return (
    <div>
      <p>Counter</p>
      <ClickMe
        counterNumber={counterNumber}
        handlerClickButton={handlerClickButton}
      />
      <br />
      <Button handlerClickButton={handlerClickButton} />
    </div>
  );
}
