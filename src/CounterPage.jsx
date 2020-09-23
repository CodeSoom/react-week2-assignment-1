import React from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

function CounterPage({ count, onClick }) {
  return (
    <div>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        count={count}
        onClick={onClick}
      />
    </div>
  );
}

export default CounterPage;
