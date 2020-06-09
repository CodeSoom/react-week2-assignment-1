import React from 'react';
import Buttons from '../components/Buttons';
import Counter from '../components/Counter';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, world!!!</p>
      <p>Hi!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        onClick={onClick}
      />
    </div>
  );
}

export default Page;
