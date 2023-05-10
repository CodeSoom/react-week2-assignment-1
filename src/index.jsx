import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import ClickMe from './ClickMe.jsx';
import Button from './Button.jsx';

function App() {
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

ReactDOM.render(<App />, document.getElementById('app'));
