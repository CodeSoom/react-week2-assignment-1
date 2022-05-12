import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

function App() {
  return (
    <div>
      <p>Counter</p>
      <Counter />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
