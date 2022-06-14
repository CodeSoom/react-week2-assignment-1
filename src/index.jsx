import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CountButton from './components/CountButton';
import NumberButtons from './components/NumberButtons';

function App() {
  const [count, setCount] = useState(0);

  const countUp = (number) => {
    setCount(count + Number(number));
  };

  const handleClick = (number) => {
    countUp(number);
  };

  return (
    <div>
      <h3>Counter</h3>
      <CountButton increasingNumber={1} count={count} onClick={handleClick} />
      <NumberButtons increasingNumber={5} onClick={handleClick} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
