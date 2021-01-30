import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import Counter from './Counter.jsx';

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>
  )
}

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1
      
    });
  }

  function Page({ count, onClick }) {
    return (
      <div>
        <p>Counter</p>
        <Counter
          count={count}
          onClick={onClick}
        />
        <Buttons 
          children={count}
          onClick={onClick}
        />
      </div>
    )
  }

  console.log(count)

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);