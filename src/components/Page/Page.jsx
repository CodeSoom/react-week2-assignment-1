import React from 'react';

import Counter from '../util/Counter';
import Buttons from '../common/Buttons';
import Reset from '../util/Reset';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClick} />
      <Reset onClick={onClick} />
    </div>
  );
}

export default Page;
