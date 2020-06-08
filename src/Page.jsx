import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, handleClickCounter, handleClickNumber }) {
  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <Counter count={count} onClick={handleClickCounter} />
      </p>
      <p>
        <Buttons onClick={handleClickNumber} />
      </p>
    </div>
  );
}

export default Page;
