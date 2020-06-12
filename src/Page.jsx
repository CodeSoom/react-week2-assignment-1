import React from 'react';
import Buttons from './Buttons';
import Counter from './Counter';

// count가 어떻게 처리되는지는 모른다.
function Page({ count, handleClick }) {
  return (
    <div>
      <p>Counter</p>
      <p>
        <Counter count={count} onClick={() => handleClick()} />
      </p>
      <p>
        <Buttons onClick={handleClick} />
      </p>
    </div>
  );
}

export default Page;
