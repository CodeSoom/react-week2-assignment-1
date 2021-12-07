import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClickCounter, onClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClickCounter}
      />
      <Buttons onClickNumber={onClickNumber} />
    </div>
  );
}

export default Page;
