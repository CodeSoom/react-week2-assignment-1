import React from 'react';

export default function Button({ value, onClickNumber }) {
  return (
    <button type="button" onClick={() => onClickNumber(value)}>
      {value}
    </button>
  );
}
