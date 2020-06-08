import React from 'react';

export default function CountUpButton({ number, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {number}
    </button>
  );
}
