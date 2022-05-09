import React from 'react';

export default function Buttons({ buttonArray, onClick }) {
  return (
    <p>
      {buttonArray.map((i) => (
        <button type="button" key={i} onClick={() => onClick(i)}>
          {i}
        </button>
      ))}
    </p>
  );
}
