import React from 'react';
import Counter from './counter';
import Buttons from './buttons';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <br />
      <br />

      <Buttons
        onClick={onClick}
      />
    </div>
  );
}

export default Page;
