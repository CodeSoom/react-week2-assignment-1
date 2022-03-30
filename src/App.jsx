import { useState } from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(increase) {
    setState({
      count: count + increase,
    });
  }

  return (
    <div>
      <p>Hello,world!!!</p>
      <p>Hi!</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <Buttons
        onClick={handleClick}
      />
    </div>
  );
}
