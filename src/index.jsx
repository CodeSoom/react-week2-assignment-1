import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1,2,3,4,5];
function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={()=>onClick({count, num:1,})}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
function Buttons({count, onClick}) {
  return (
    <p>
      {numbers.map((i) => (
        <Button key={i} onClick={()=>onClick({count, num:i,})}>
          {i}
        </Button>
      ))}
    </p>
  );
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
        count={count}
        onClick={onClick}
      />
    </div>
  );
}
function App() {
  const [state, setState] = useState({
    count: 0,
    num: 0,
  });

  const { count, num } = state;

  function handleClick({num}) {
    setState({ 
        count: count + num,
        num,},
    );
  }
  return (
    <Page
      count={count}
      num={num}
      onClick={handleClick}
    />
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('app'),
);