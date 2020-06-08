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
    });
  };

  return (
    <div>
      <p>Counter</p>
      <CounterButton count={count} onClick={handleCounterClick}/>
      <br />
      {[1,2,3,4,5].map(num => <button type="button">{num}</button>)}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
