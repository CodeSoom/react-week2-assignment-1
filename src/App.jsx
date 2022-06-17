import { useState } from 'react';

import CurrentCountButton from './CurrentCountButton';
import CountButtons from './CountButtons';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClickButton = (number) => {
    setCount((prevCount) => (prevCount + number));
  };

  return (
    <>
      <p>Counter</p>
      <CurrentCountButton count={count} onClick={handleClickButton} />
      <CountButtons onClick={handleClickButton} />
    </>
  );
}
