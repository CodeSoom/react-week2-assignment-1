import React from 'react';

import MultiCounterButton from './NumberCounterButton';

function NumberCounterButtons({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <MultiCounterButton number={num} onClick={onClick} key={num} />
      ))}
    </div>
  );
}

export default NumberCounterButtons;
