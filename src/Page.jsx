import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick, numberClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <br />
      <br />
      <Buttons onClick={numberClick} />
    </div>
  );
}
export default Page;
