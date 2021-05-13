import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ClickMe from './Components/ClickMe';
import NumberPad from './Components/NumbersPad';

function App() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

  function handleClick(number) {
    setCount(count + number);
  }

  return (
    <div>
      <h2>Count</h2>
      <ClickMe count={count} onClick={handleClick} />
      <NumberPad numbers={numbers} onClick={handleClick} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
