import { useState } from 'react';

import Page from './components/Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  function handleClick(number = 1) {
    setState({
      ...state,
      count: count + number,
    });
  }

  return (
    <>
      <Page
        count={count}
        onClick={handleClick}
      />
    </>
  );
}
