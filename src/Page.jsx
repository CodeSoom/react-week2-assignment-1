import React from 'react';

import Counter from './Counter';
import NumberButtons from './NumberButtons';

export default function Page({ count, onClickPlusNumber }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClickPlusOne={() => onClickPlusNumber(1)}
      />
      <NumberButtons
        onClickPlusNumber={onClickPlusNumber}
      />
    </div>
  );
}
