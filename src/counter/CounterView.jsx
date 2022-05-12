import React from 'react';

export default function CounterView({ handleCounter, children, value }) {
  return (
    <button type="button" onClick={handleCounter(value)}>{children}</button>
  );
}
