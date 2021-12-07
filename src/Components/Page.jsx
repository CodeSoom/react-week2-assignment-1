import React from 'react';

import Counter from './Counter';
import Adder from './Adder';

const Page = ({ count, onClick }) => (
  <>
    <p>Counter</p>
    <div>
      <Counter
        count={count}
        onClick={() => onClick(1)}
      />
    </div>
    <div>
      {[1, 2, 3, 4, 5].map((i) => <Adder step={i} onClick={() => onClick(i)} />)}
    </div>
  </>
);

export default Page;
