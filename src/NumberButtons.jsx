import React from 'react';

export default function NumberButtons({ onClick }) {
  return (
    <p>
      {
        [1, 2, 3, 4, 5].map((number) => (
          <button
            type="button"
            onClick={() => onClick(number)}
          >
            {number}
          </button>
        ))
      }
    </p>
  );
}
