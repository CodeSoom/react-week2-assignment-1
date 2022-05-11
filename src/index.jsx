import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      {count}
    </button>
  );
}

function Button({ children, onClick, num }) {
  return (
    <button type="button" onClick={() => onClick(num)}>
      {children}
    </button>
  );
}

function Buttons({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={onClick} num={i}>
          {i}
        </Button>
      ))}
    </div>
  );
}

function Page({ count, onClick, numberClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <br />
      <br />
      <Buttons onClick={numberClick} />
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

  function handleNumberClick(num) {
    setState({
      count: count + num,
    });
  }

  return (
    <Page count={count} onClick={handleClick} numberClick={handleNumberClick} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
