import React from 'react';

export default function Button({ onClick }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((number) => (
        <button
          type="button"
          key={number}
          onClick={() => onClick(number)}
        >
          {number}
        </button>
      ))}
    </>
  );
}
