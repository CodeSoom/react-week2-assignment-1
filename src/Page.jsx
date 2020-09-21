import React from 'react';
import NumberButtons from './NumberButtons';
import Counter from './Counter';

function Page({ count, handleClick, handleClickNumber }) {
  return (
    <div>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <NumberButtons
        count={count}
        onClick={handleClickNumber}
      />
    </div>
  );
}

export default Page;
