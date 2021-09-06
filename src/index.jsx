import React from 'react';
import ReactDOM from 'react-dom';
import CounterPage from './CounterPage';

function App() {
  return (
    <CounterPage />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
