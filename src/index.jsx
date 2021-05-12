import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Title from './Components/Title';
import ClickMe from './Components/ClickMe';
import NumberPad from './Components/NumbersPad';

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;
  const numbers = [1, 2, 3, 4, 5];

  function handleClick(addNumber) {
    setState({ count: count + addNumber });
  }

  return (
    <div>
      <Title />
      <ClickMe count={count} onClick={handleClick} />
      <NumberPad numbers={numbers} onClick={handleClick} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
