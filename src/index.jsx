import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './CounterButton';

function App() {
  const [state, setState] = useState({
    count: 0,
  })

  const { count } = state;

  function handleCounterClick() {
    setState({
      count: count + 1,
    })
  };

  return (
    <div>
      <p>Counter</p>
      <CounterButton count={count} onClick={handleCounterClick}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
