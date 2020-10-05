import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, world!!</p>
      <p>Hi!</p>
      <Counter
        onClick={onClick}
        count={count}
      />
      <Buttons
        onNumberClick={onClick}
      />
    </div>
  );
}

export default Page;
