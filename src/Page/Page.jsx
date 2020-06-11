import React from 'react';
import Counter from '../Components/Counter';
import NumberButton from '../Components/NumberButton';


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
