import React from 'react';

import Counter from './Conter';
import Buttons from './Buttons';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, Counter!</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClick} />
    </div>
  );
}
