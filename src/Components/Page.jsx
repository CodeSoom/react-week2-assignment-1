import React, { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';


function Page() {
  const [count, setCount] = useState(0);

  function handleCounterClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={handleCounterClick} />
      <Buttons count={count} onClick={setCount} />
    </div>
  );
}

export default Page;
