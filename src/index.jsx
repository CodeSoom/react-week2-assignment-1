import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1,2,3,4,5];
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
  return (
    <button type="button">
      {children}
    </button>
  );
}
function Buttons() {
  return (
    <p>
      {numbers.map((i) => (
        <Button key={i}>
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
      <Buttons />
    </div>
  );
}
function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    if(value == 1){
        setState(
            { count: count + 1 },
          );
        return;
    }
    if(value == 2){
        setState(
            { count: count + 2 },
          );
        return;
    }
    if(value == 3){
        setState(
            { count: count + 3 },
          );
        return;
    }
    if(value == 4){
        setState(
            { count: count + 4 },
          );
        return;
    }
    if(value == 5){
        setState(
            { count: count + 5 },
          );
        return;
    }
    
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
