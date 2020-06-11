import React from 'react';

export default function Numbers({ number, onClick }) {
  const numbers = [...Array(number)].map((_, i) => i + 1);
  return (
    numbers.map((i) => (
      <button type="button" onClick={() => onClick(i)} key={i}>
        {i}
      </button>
    ))
  );
}
