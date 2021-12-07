import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me
      (
      {count}
      )
    </button>
  );
}

function Button({ children }) {
  return (
    <button type="button">{children}</button>
  );
}

function Buttons() {
  return (
    <div>
      {[1, 2, 3].map((i) => (
        <Button key={i}>{i}</Button>
      ))}
    </div>
  );
}

function Page({ count, onClick }) {
  return (
    <div>
      <div>콩심</div>
      <Buttons />
      <Counter
        count={count}
        onClick={onClick}
      />
    </div>
  );
}

function App() {
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
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
