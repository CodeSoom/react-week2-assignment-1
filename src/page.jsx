import React from 'react';
import Counter from './counter';
import Buttons from './buttons';

function Page({ count, handleClick, handleNumbersClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        handleClick={handleClick}
      />
      <Buttons
        handleNumbersClick={handleNumbersClick}
      />
    </div>
  );
}
export default Page;
