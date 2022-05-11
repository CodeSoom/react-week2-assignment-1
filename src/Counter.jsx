import React from 'react';

const Counter = ({ onCounter, children, value }) => {
  const handleCounter = () => {
    onCounter(value);
  };
  return (
    <button type="button" onClick={handleCounter} value={value}>{children}</button>
  );
};

export default Counter;
