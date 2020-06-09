import React from 'react';
import Counter from './counter';
import NumberButtons from './numberButtons';

function Page({ count, handleClick, handleClickNumber }) {
  return (
    <div>
      <p>
        Counter
      </p>
      <Counter
        count={count}
        handleClick={handleClick}
      />
      <NumberButtons
        handleClickNumber={handleClickNumber}
      />
    </div>
  );
}

export default Page;
