import React from 'react';
import MultiCounterButton from './MultiCounterButton';

function MultiCounterButtons() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <MultiCounterButton displayName={num} key={num} />
      ))}
    </div>
  );
}

export default MultiCounterButtons;
