import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handlerClick = (number) => {
    setState({ count: count + number });
  };

  return (
    <Page
      count={count}
      onClick={handlerClick}
    />
  );
}
