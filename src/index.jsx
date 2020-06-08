import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './CounterButton';
import MultiCounterButtons from './multiCounter/MultiCounterButtons';
import Title from './Title';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleCounterClick(increaseAmount) {
    setState({
      count: count + increaseAmount,
    });
  }

  return (
    <div>
      <Title />
      <CounterButton count={count} onClick={() => handleCounterClick(1)} />
      <MultiCounterButtons onClick={handleCounterClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
