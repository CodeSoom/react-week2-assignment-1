import React from 'react';
import Buttons from '../components/buttons';
import Counter from '../components/counter';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        onClick={onClick}
      />
    </div>
  );
}

export default Page;
