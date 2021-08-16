import React, { useState } from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

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
