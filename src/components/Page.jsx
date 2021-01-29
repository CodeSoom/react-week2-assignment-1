import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, addByOne, addByClickedNumber }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        addByOne={addByOne}
      />
      <Buttons
        addByClickedNumber={addByClickedNumber}
      />
    </div>
  );
}
