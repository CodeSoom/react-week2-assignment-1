import React from 'react';

import Title from './Title';
import Counter from './Counter';

export default function Page({ count, handleCount }) {
  return (
    <>
      <Title />
      <Counter
        count={count}
        handleCount={handleCount}
      />
    </>
  );
}
