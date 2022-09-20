import React from 'react';

import Counter from './Conter';
import Buttons from './Buttons';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, Counter!</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClick} />
    </div>
  );
}

export default Page;
