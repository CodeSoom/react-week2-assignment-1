import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick, onButtonClick }) {
  return (
    <div>
      <p>Hello, world!!</p>
      <p>Hi!</p>
      <Counter
        onClick={onClick}
        count={count}
      />
      <Buttons
        onButtonClick={onButtonClick}
      />
    </div>
  );
}

export default Page;
