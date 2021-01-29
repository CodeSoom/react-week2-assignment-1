import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';


function Page({ count, onCounterClick, onButtonClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onCounterClick} />
      <Buttons onClick={onButtonClick} />
    </div>
  );
}

export default Page;
