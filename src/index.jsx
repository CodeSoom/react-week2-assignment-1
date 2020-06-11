import React, { useState } from 'react';
import { render } from 'react-dom';


const Counter = () => {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;
  const handleClick = () => {
    console.log('handleClick');
    setState({
      count: count + 1,
    });
    console.log(count);
  };

  return (

    <button type="button" onClick={handleClick}>
      Click Me (
      {count}
      )
    </button>
  );
};

const Buttons = () => (
  <div>
    {[1, 2, 3].map((i) => (<Button key={i}>{i}</Button>))}
  </div>
);

const Button = ({ children }) => (<button>{children}</button>);


const App = () => (
  <div>
    <p>Hello World !</p>
    <p>Hi</p>
    <Buttons />
    <Counter />
  </div>
);
render(<App />, document.getElementById('app'));
