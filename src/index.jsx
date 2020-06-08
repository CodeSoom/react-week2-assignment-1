import React from 'react';
import ReactDOM from 'react-dom';

import CounterTemplate from './CounterTemplate';

function App() {
  return (
    <CounterTemplate />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
