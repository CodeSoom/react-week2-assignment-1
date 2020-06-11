import React, { useState } from 'react';
import { render } from 'react-dom';


const Counter = ({ count, onClick }) => (

  <button type="button" onClick={onClick}>
    Click Me (
    {count}
    )
  </button>
);

const Buttons = () => (
  <div>
    {[1, 2, 3].map((i) => (<Button key={i}>{i}</Button>))}
  </div>
);

const Button = ({ children }) => (<button>{children}</button>);

const Page = ({ onClick, count }) => (
  <div>
    <p>Hello World !</p>
    <p>Hi</p>
    <Buttons />
    <Counter count={count} onClick={onClick} />
  </div>
);


const App = () => {
  const [state, setState] = useState({
    count: 0,
  });
  const handleClick = () => {
    setState({
      count: count + 1,
    });
  };
  const { count } = state;
  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
};
render(<App />, document.getElementById('app'));
