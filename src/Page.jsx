import React from 'react';
import Buttons from './Buttons';
import Counter from './Counter';

export default function Page({ count, onClick }) {
  return (
    <div>
      <h1>
        Counter
      </h1>
      <Buttons
        count={count}
        onClick={onClick}
      />
      <Counter
        count={count}
        onClick={onClick}
      />
    </div>
  );
}
