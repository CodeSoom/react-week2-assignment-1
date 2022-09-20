import React, { useState } from 'react';
import Buttons from './Buttons';
import Counter from './Counter';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleNumberClick(value) {
    setState({
      count: count + value,
    });
  }

  return (
    <div>
      <div>
        <Counter count={count} onClick={handleClick} />
      </div>
      <div>
        <Buttons onClick={handleNumberClick} />
      </div>
    </div>
  );
}

export default App;
