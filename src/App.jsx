import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handlerClick = (e) => {
    setState({ count: count + Number(e.target.dataset.number) });
  };

  return (
    <Page
      count={count}
      onClick={handlerClick}
    />
  );
}
