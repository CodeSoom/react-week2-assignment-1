import React, { useState } from 'react';

import Counter from './pages/Counter';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleClick = (number) => {
    setState({
      count: count + number,
    });
  };
  return (
    <>
      <Counter count={count} onClick={handleClick} />
    </>
  );
}
