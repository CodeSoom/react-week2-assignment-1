import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, handleClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        handleClickNumber={handleClickNumber}
      />
      <Buttons
        handleClickNumber={handleClickNumber}
      />
    </div>
  );
}
