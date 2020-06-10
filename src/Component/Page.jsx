import React from 'react';
import Counter from './Counter';
import Numbers from './Numbers';

function Page({ count, handleClickButton, handleClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <p>
        <Counter
          count={count}
          handleClick={handleClickButton}
        />
      </p>
      <p>
        <Numbers
          number={5}
          handleClick={handleClickNumber}
        />
      </p>
    </div>
  );
}

export default Page;
