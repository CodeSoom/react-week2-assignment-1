import React from 'react';

function NumberInput({ value, onChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
    />
  );
}

export default NumberInput;
