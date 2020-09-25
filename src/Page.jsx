import React from 'react';

import Counter from './Counter';

const Page = ({ count, onClick }) => (
  <div>
    <p>Counter</p>
    <Counter onClick={() => onClick({ difference: 1 })}>
      Click me! (
      {count}
      )
    </Counter>
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <Counter
          onClick={() => onClick({ difference: number })}
          key={number}
        >
          {number}
        </Counter>
      ))}
    </p>
  </div>
);

export default Page;
