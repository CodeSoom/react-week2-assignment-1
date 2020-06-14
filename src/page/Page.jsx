import React from 'react';
import Counter from '../components/Counter';
import NumberButton from '../components/NumberButton';


function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <NumberButton onClick={onClick} />
    </div>
  );
}

export default Page;
