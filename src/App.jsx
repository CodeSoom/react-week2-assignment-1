import React, { useState } from 'react';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

function Button({ children }) {
  return <button type="button">{children}</button>;
}

function Buttons({ labels }) {
  return (
    <p>
      {
        labels.map((label) => <Button key={label}>{label}</Button>)
      }
    </p>
  );
}

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({ count: count + 1 });
  }

  return (
    <div>
      <p>
        <Counter
          count={count}
          onClick={handleClick}
        />

      </p>
      <Buttons labels={[1, 2, 3]} />
    </div>
  );
}
