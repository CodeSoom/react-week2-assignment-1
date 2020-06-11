import React from 'react';

export default function Number({ number, onClick }) {
  const array = [...Array(number)].map((_, i) => i + 1);
  return (
    array.map((i) => (
      <button type="button" onClick={() => onClick(i)} key={i}>
        {i}
      </button>
    ))
  );
}
