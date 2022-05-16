import React from 'react';

export default function NumberButtons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <button key={i} type="button" onClick={() => onClick(i)}>
          {i}
        </button>
      ))}
    </p>
  );
}
