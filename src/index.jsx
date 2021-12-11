import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';

function Counter() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    console.log('click');
    setState({
      count: count + 1,
    });
  }

  return (
    <Button type="button" onClick={handleClick}>
      Click me!
      (
      {count}
      )
    </Button>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}

function Buttons() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </>
  );
}

function App() {
  return (
    <div>
      <p>Hello, world!</p>
      <p>Hi!</p>
      <Buttons />
      <Counter />
    </div>
  );
}

function render() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

render();
