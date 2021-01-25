import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick, handleDigit }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={handleDigit} />
    </div>
  );
}

export default Page;
