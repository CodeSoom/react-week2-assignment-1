import React from 'react';

export default function NumberButton({ number, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {number}
    </button>
  );
}
