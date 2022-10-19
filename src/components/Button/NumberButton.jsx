import React from 'react';

function NumberButton({ onClick }) {
  const numberList = [1, 2, 3, 4, 5];
  return (
    <div>
      {
        numberList.map((value) => (
          <button
            type="button"
            onClick={() => onClick(value)}
            key={value}
          >
            {value}
          </button>
        ))
      }
    </div>
  );
}

export default NumberButton;
