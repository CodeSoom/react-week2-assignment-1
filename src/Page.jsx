import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, onClickPlusOne, onClickPlusNumber }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClickPlusOne={onClickPlusOne}
      />
      <Buttons
        onClickPlusNumber={onClickPlusNumber}
      />
    </div>
  );
}
