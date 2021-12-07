import React from 'react';

import Buttons from './buttons';
import Counter from './counter';

export default function Page({ count, onClick }) {
  return (
    <div>
      <Buttons />
      <Counter
        count={count}
        onClick={onClick}
      />
    </div>
  );
}
