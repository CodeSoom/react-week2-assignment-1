import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;
  function onClickOne() {
    setState((prev) => ({ ...prev, count: count + 1 }));
  }
  function onClickNumber(numbers) {
    setState((prev) => ({ ...prev, count: count + numbers }));
  }
  return (
    <Page
      count={count}
      onClickOne={onClickOne}
      onClickNumber={onClickNumber}
    />
  );
}
