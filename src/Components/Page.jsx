import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';


function Page({ count, setCount }) {
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
