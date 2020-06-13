import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, handleClick }) {
  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <Counter count={count} onClick={handleClick} />
      </p>
      <p>
        <Buttons onClick={handleClick} />
      </p>
    </div>
  );
}

export default Page;
