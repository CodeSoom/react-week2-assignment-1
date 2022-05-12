import React from 'react';

function MultipleIncrease({ onClick }) {
  return (
    <p>
      {
        [1, 2, 3, 4, 5].map((i) => (
          <button type="button" onClick={() => onClick(i)}>
            {i}
          </button>
        ))
      }
    </p>
  );
}

export default MultipleIncrease;
