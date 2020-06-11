import React from 'react';

import Counter from '../components/Counter';
import Buttons from '../components/Buttons';

export default function Count({ count, onClick }) {
  return (
    <div>
      <h1>Counter</h1>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClick} />
    </div>
  );
}
