import React from 'react';
import Counter from './counter';
import Buttons from './buttons';

function Page({ count, handleClick }) {
  return (
    <div>
      <p>Hello,world!</p>
      <Counter
        count={count}
        handleClick={handleClick}
      />
      <Buttons
        handleClick={handleClick}
      />
    </div>
  );
}

export default Page;
