import React from 'react';
import ReactDOM from 'react-dom';

import CounterApp from './CounterApp';

function App() {
  return (
    <CounterApp />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
