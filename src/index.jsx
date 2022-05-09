import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';
import Counter from './Counter';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(value = 1) {
    setState({
      count: count + value,
    });
  }

  return (
    <>
      <p>Counter</p>
      <Counter count={count} onClick={handleClick} />
      <Buttons buttonArray={[1, 2, 3, 4, 5]} onClick={handleClick} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
