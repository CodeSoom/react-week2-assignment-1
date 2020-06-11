import React from 'react';

import Counter from './Counter';
import Numbers from './Numbers';

export default function Page({ count, handleClickButton, handleClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <p>
        <Counter
          count={count}
          onClick={handleClickButton}
        />
      </p>
      <p>
        <Numbers
          number={5}
          handleClick={handleClickNumber}
        />
      </p>
    </div>
  );
}
