import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onButtonClick, onCounterClick }) {
  return (
    <div>
      <p>Hello, World!</p>
      <Counter
        count={count}
        onClick={onCounterClick}
      />
      <Buttons count={count} onClick={onButtonClick} />
    </div>
  );
}

export default Page;
