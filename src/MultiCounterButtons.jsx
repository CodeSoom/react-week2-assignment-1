import React from 'react';

function MultiCounterButtons() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <button type="button" key={num}>
          {num}
        </button>
      ))}
    </div>
  );
}

export default MultiCounterButtons;
