import { useState } from 'react';
import Counter from './counter';
import Buttons from './buttons';

export default function Page() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(value) {
    setState({
      count: count + value,
    });
  }
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <Buttons
        count={count}
        onClick={handleClick}
      />
    </div>
  );
}
