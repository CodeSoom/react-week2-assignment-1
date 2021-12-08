import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(number) {
    setCount(count + number);
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}
