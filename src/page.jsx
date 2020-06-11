import React from 'react';
import Counter from './counter';
import Buttons from './buttons';

function Page({ count, handleClickNumber }) {
  return (
    <div>
      <p>Hello,world!</p>
      <Counter
        count={count}
        onClick={handleClickNumber}
      />
      <Buttons
        onClick={handleClickNumber}
      />
    </div>
  );
}

export default Page;
