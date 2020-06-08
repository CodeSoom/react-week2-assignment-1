import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './CounterButton';
import NumberCounterButtons from './multiCounter/NumberCounterButtons';
import Title from './Title';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleCounterClick(numberOfIncrease) {
    setState({
      count: count + numberOfIncrease,
    });
  }

  return (
    <div>
      <Title />
      <CounterButton count={count} onClick={() => handleCounterClick(1)} />
      <NumberCounterButtons onClick={handleCounterClick} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
