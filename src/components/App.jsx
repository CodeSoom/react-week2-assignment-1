import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(buttonNumber) {
    setCount(count + buttonNumber);
  }
  return <Page onClick={handleClick} count={count} />;
}
