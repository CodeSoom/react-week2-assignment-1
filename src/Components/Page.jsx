import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';


function Page({ count, counterClick, setCount }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={counterClick} />
      <Buttons count={count} onClick={setCount} />
    </div>
  );
}

export default Page;
