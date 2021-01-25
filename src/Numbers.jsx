import React from 'react';

function Number({ value, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

function Numbers({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Number
          key={i}
          value={i}
          onClick={onClick}
        />
      ))}
    </p>
  );
}

export default Numbers;
