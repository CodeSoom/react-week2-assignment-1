import React from 'react';
import Counter from './Counter';
import NumberButtons from './NumberButtons';

function Page({ count, onClick }) {
  return (
    <div>
      <p>
        Counter
      </p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <NumberButtons
        onClick={onClick}
      />
    </div>
  );
}

export default Page;
