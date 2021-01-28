import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';


function Page({ count, counterClick, buttonClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={counterClick} />
      <Buttons onClick={buttonClick} />
    </div>
  );
}

export default Page;
