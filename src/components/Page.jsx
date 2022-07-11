import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick, onClickNumber }) {
  return (
    <div>
      <p>Hello, world!</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClickNumber} />
    </div>
  );
}

export default Page;
