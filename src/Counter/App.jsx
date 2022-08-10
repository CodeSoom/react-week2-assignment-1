import { useState } from 'react';

import CounterPage from './Page';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  function handleClickButton(number) {
    setCount(count + number);
  }

  return (
    <CounterPage
      count={count}
      // eslint-disable-next-line react/jsx-no-bind
      onClickButton={handleClickButton}
    />
  );
}
