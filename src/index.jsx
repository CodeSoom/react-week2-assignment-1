import React from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './CounterButton';

function App() {
  return (
    <div>
      <p>Counter</p>
      <CounterButton />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
