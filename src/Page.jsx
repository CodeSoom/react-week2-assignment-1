import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <p>
        <Buttons count={count} onClick={onClick} />
      </p>
    </div>
  );
}

export default Page;
