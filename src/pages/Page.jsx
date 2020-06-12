import React from 'react';

import Counter from '../components/Counter';
import Buttons from '../components/Buttons';

export default function Page({ count, onClick }) {
  return (
    <div>
      <h1>Counter</h1>
      <Counter onClick={onClick} count={count} />
      <Buttons onClick={onClick} />
    </div>
  );
}
