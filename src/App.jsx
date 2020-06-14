import React, { useState } from 'react';

import Page from './pages/Page';

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
      <Page count={count} onClick={handleClick} />
    </>
  );
}
