/* eslint-disable react/prop-types */
import React from 'react';

export default function Button({
  value,
  onClick,
}) {
  return (
    <button
      type="button"
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
