import React from 'react';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((buttonNumber) => (
        <button
          type="button"
          onClick={() => onClick(buttonNumber)}
          key={buttonNumber}
        >
          {buttonNumber}
        </button>
      ))}
    </p>
  );
}
