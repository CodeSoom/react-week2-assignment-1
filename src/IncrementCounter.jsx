import React from 'react';
import Button from './Button';

const IncrementCounter = ({ count, setCount }) => {
  const handleClick = () => {
    setCount();
  };
  return (
    <Button type="button" handleClick={handleClick}>
      Click me!(
      {count}
      )
    </Button>
  );
};

export default IncrementCounter;
