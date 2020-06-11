/* @jsx React.createElement */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Counter() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleCount() {
    setState({
      count: count + 1,
    });
  }

  return (
    <button type="button" onClick={handleCount}>
      counter:
      {count}
    </button>
  );
}

function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {
        [1, 2, 3].map((i) => (
          <Button key={i}>
            {i}
          </Button>
        ))
      }
    </p>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <Buttons />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
