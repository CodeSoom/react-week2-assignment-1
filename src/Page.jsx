import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <p>
        <Counter count={count} onClick={onClick} />
      </p>
      <Buttons onClick={onClick} />
    </div>
  );
}
