import React from 'react';

function IncreaseCountButton({ value, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default IncreaseCountButton;
