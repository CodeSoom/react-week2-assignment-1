import React from 'react';

export default function Button({ value, onClickPlusNumber }) {
  return (
    <button type="button" onClick={() => onClickPlusNumber(value)}>
      {value}
    </button>
  );
}
