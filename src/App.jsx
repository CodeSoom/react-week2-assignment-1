import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleClickNumber(value) {
    setState({
      count: count + value,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
      onClickNumber={handleClickNumber}
    />
  );
}
