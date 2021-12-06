import React, { useState } from 'react';

import Counter from './counter';
import Buttons from './buttons';

function Page() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;
  function handleIncreaseByNumber(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <>
      <Counter count={count} onIncreaseByNumber={handleIncreaseByNumber} />
      <Buttons onIncreaseByNumber={handleIncreaseByNumber} />
    </>
  );
}

export default Page;
