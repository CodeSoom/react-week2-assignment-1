import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1,2,3,4,5];
function Counter({ count, num, onClick }) {
  return (
    <button type="button" onClick={onClick}>
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
function Buttons({count, num, onClick}) {
  return (
    <p>
      {numbers.map((i) => (
        <Button key={i} onClick={()=>{
            setState(
                { count: count,
                    num: num },
              );
            onClick;
        }}>
          {i}

        </Button>
      ))}
    </p>
  );
}
function Page({ count, num, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        num={num}
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
    setState(
        { count: count + 1 ,
        num,},
      );
    if(num == 1){
        setState(
            { count: count + 2 ,
                num,},
          );
        return;
    }
    if(num == 2){
        setState({ 
            count: count + 2,
            num,
        });
        return;
    }
    if(num == 3){
        setState({ 
            count: count + 3,
            num},
        );
        return;
    }
    if(num == 4){
        setState({ 
            count: count + 4,
            num,},
        );
        return;
    }
    if(num == 5){
        setState({ 
            count: count + 5,
            num,},
        );
        return;
    }

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