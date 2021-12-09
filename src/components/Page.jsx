import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';
import Title from './Title';

const TITLE = 'Counter';

export default function Page({ count, onClickCounter, onClickNumber }) {
  return (
    <div>
      <Title title={TITLE} />
      <Counter
        count={count}
        onClick={onClickCounter}
      />
      <Buttons onClickNumber={onClickNumber} />
    </div>
  );
}
