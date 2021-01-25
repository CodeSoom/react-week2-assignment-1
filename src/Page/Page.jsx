import React from 'react';

import Counter from '../components/Counter';
import Buttons from '../commons/Buttons';
import Reset from '../components/Reset';

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
