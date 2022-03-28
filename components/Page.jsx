import React from 'react';
import Counter from './Counter';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
    </div>
  );
}

export default Page;
