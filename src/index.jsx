import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './CounterButton';
import MultiCounterButtons from './MultiCounterButtons';

function App() {
  const [state, setState] = useState({
    count: 0,
  })

  const { count } = state;

  function handleCounterClick(increaseAmount) {
    setState({
      count: count + increaseAmount,
    });
  };

  return (
    <div>
      <p>Counter</p>
      <CounterButton count={count} onClick={() => handleCounterClick(1)}/>
      <MultiCounterButtons />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
