import React, { useState } from 'react';
import ReactDom from 'react-dom';

function Counter() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      Click me!
      (
      { count }
      )
    </button>
  );
}

function Button({ children }) {
  return (
    <button type="button">
      { children }
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>
  );
}
function createElement() {
  return 'Hello, world!';
}

function App() {
  return (
    <div>
      <p>Hello,world!</p>
      <Counter />
      <Buttons />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
