import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, handleButtonClick }) {
  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <Counter count={count} onClick={handleButtonClick} />
      </p>
      <p>
        <Buttons onClick={handleButtonClick} />
      </p>
    </div>
  );
}

export default Page;
