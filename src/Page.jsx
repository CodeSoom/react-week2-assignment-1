import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick, ButtonClick }) {
  return (
    <div>
      <p>Hello, world!!</p>
      <p>Hi!</p>
      <Counter
        onClick={onClick}
        count={count}
      />
      <Buttons
        ButtonClick={ButtonClick}
      />
    </div>
  );
}

export default Page;
