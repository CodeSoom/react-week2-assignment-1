import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';
import Button from './Button';

export default function Page({
  count, onClickCounter, onClickNumber, onClickClear,
}) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClickCounter}
      />
      <Buttons onClick={onClickNumber} />
      <Button onClick={onClickClear}>
        Clear
      </Button>
    </div>
  );
}
