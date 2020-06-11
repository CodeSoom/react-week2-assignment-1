import React from 'react';

function NumberButton({ onClick }) {
  return (
    <p>
      {
        [1, 2, 3, 4, 5].map((i) => (
          <button type="button" key={i} onClick={() => onClick(i)}>
            {i}
          </button>
        ))
      }
    </p>
  );
}

export default NumberButton;
