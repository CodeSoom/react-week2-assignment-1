import React from 'react';
import Buttons from './Buttons';
import Counter from './Counter';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello,world!!!</p>
      <p>Hi!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons onCick={onClick} />
    </div>
  );
}

export default Page;
