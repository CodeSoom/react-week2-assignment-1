import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick }) {
  return (
    <div>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons onClick={onClick} />
    </div>
  );
}

export default Page;
