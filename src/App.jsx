import React, { useState } from 'react';
import CountButton from './CountButton';
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
        <CountButton
          count={count}
          onClick={handleClick}
        />

      </p>
      <Buttons labels={[1, 2, 3]} />
    </div>
  );
}
