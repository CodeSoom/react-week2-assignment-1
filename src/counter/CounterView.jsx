import React from 'react';

export default function CounterView({ onCounter, children, value }) {
  return (
    <button type="button" onClick={() => onCounter(value)}>{children}</button>
  );
}
