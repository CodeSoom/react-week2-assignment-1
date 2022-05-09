import React from 'react';
import CounterButton from './CounterButton';

const CounterButtons = ({ setCount }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setCount((previousCount) => previousCount + Number(value));
  };
  return (
    <div>
      <CounterButton handleClick={handleClick} />
    </div>
  );
};

export default CounterButtons;
