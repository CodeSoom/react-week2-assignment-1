import React from 'react';
import NumberButtons from './NumberButtons';
import Counter from './Counter';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <NumberButtons onClick={onClick} />
    </div>
  );
}

export default Page;
