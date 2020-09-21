import React from 'react';

import Counter from './Counter';
import CounterController from './CounterController';

const Page = ({ count, onClick }) => (
  <div>
    <p>Counter</p>
    <Counter count={count} onClick={onClick} />
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <CounterController
          difference={number}
          onClick={onClick}
          key={number}
        />
      ))}
    </p>

  </div>
);

export default Page;
