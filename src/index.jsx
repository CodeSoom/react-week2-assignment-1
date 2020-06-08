import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './CounterButton';

function App() {
  const [state, setState] = useState({
    count: 0,
  })

  const { count } = state;

  return (
    <div>
      <p>Counter</p>
      <CounterButton count={count}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
