import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

const BUTTON_LABELS = [1, 2, 3, 4, 5];

function App() {
  const [count, setCount] = useState(0);

  const handleCounterClick = () => {
    setCount((value) => value + 1);
  };

  const handleButtonClick = (buttonValue) => {
    setCount((value) => value + buttonValue);
  };

  return (
    <div>
      <h3>Counter</h3>
      <Counter count={count} onClick={handleCounterClick} />
      <Buttons labels={BUTTON_LABELS} onClick={handleButtonClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
