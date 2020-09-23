import React from 'react';

import Counter from './Counter';
import CountController from './CountController';

const Page = ({ count, onClick }) => (
  <div>
    <p>Counter</p>
    <Counter count={count} onClick={() => onClick({ difference: 1 })} />
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <CountController
          difference={number}
          onClick={() => { onClick({ difference: number }); }}
          key={number}
        />
      ))}
    </p>
  </div>
);

export default Page;
