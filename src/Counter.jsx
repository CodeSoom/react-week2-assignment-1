import React from 'react';

const Counter = ({ onCounter, children, value }) => {
  const handleCounter = (countValue) => {
    onCounter(countValue);
  };
  return (
    <button type="button" onClick={() => handleCounter(value)}>{children}</button>
  );
};

export default Counter;
