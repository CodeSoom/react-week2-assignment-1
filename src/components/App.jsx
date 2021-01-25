import React, { useState } from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick(addedNumber = 1) {
    setState({
      count: count + addedNumber,
    });
  }
  return (
    <div>
      <p>
        <Counter count={count} onClick={handleClick} />
      </p>
      <p>
        <Buttons onClick={handleClick} />
      </p>
    </div>
  );
}

export default App;
